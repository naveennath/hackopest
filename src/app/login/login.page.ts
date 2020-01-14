import { firebasecrds } from './../../Firebase_config';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

import { User } from './../../models/user/user';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  Userinfo = {} as User;
  constructor(
    private router: Router,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private db: AngularFirestore
  ) {
  }
  Email: string;
   pass: string;
  // tslint:disable-next-line: no-inferrable-types
  username: string = '';
  // tslint:disable-next-line: no-inferrable-types
  password: string = '';
  // tslint:disable-next-line: no-inferrable-types
  EEmail: string = '';
  name = '';
  phone: number;


  ngOnInit() {
    // firebase.initializeApp(firebasecrds);
  }
  async msg1() {
    const toast = await this.toastController.create({
      message: 'Please fill all the details',
      duration: 2000,
      animated : true,
      mode : 'ios',
      showCloseButton : true,
      color: 'primary',
    });
    toast.present();
  }
  async msg3() {
    const toast = await this.toastController.create({
      message: 'Successfully loged in',
      duration: 2000,
      animated : true,
      mode : 'ios',
      showCloseButton : true,
      color: 'primary',
    });
    toast.present();
  }
  async msg2(a: any) {
    const toast = await this.toastController.create({
      message: a,
      duration: 2000,
      animated : true,
      mode : 'ios',
      showCloseButton : true,
      color: 'primary',
    });
    toast.present();
  }
  trylogin() {


        firebase.auth().signInWithEmailAndPassword(this.Email,
          // tslint:disable-next-line: max-line-length
          this.password).then((data) => { console.log('success'); this.navCtrl.navigateForward('tabs/home'); this.Userinfo.EEmail = ''; this.password = ''; }
          ).catch((err) => {
            this.msg3();
          });


}
navigate(path: string) {
  this.route.navigateByUrl('/' + path);
}
// register() {
//   firebase.auth().createUserWithEmailAndPassword(this.EEmail,
//     this.password).then((data) => { this.navCtrl.navigateForward('home'); this.EEmail = ''; this.password = ''; }
//     ).catch((err) => {
//       console.log(err);
//     });
// }
 regist() {
try {
   if (this.Userinfo.name && this.Userinfo.phone && this.Userinfo.EEmail && this.password && this.Userinfo.username) {
    firebase.auth().createUserWithEmailAndPassword(this.Email,
      this.password).then((data) => { this.Userinfo.EEmail = ''; this.password = ''; }
      );
    this.db.collection('users').add({
      name : this.Userinfo.name,
      phone : this.Userinfo.phone,
      EEmail : this.Userinfo.EEmail,
      username : this.Userinfo.username,

    });
    this.Userinfo = {} as User;
    this.password = '';
    this.msg3();
    this.navCtrl.navigateForward('tabs/home');
   } else {
     this.msg1();
   }
  } catch (e) {
     this.msg2(this.e);
}
// login(this.Email: any, this.pass: any); {
//   firebase.auth().createUserWithEmailAndPassword(Email,
//     pass).then((data) => { this.regist(); }
//     ).catch((err) => {
//       this.msg2(err);
//     });
// }

  // tslint:disable-next-line: triple-equals
  // if (this.name == '') {
  //     this.presentToast('name required'); } else if (this.phone == null) {
  //     this.presentToast('Phone number required'); } else if (this.EEmail == null) {
  //       this.presentToast('e-mail required');
  //     // tslint:disable-next-line: triple-equals
  //     } else if (this.username == '') {
  //       this.presentToast('username is required');
  //     // tslint:disable-next-line: triple-equals
  //     } else if (this.password == '') {
  //       this.presentToast('password is required');
  //     } else  if ( this.name && this.EEmail && this.phone && this.username && this.password) {
  //       this.presentToast('ENTER ALL DETAILS');
  //     } else {
  //       this.disabledButton2 = true;
  //       const loader = await this.loadingCtrl.create({
  //         message : 'please wait while registering...',
  //       });
  //       loader.present();

  //     }
    }
logout() {
  firebase.auth().signOut();
}
}


