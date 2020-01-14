import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
// tslint:disable-next-line: class-name
export class homePage implements OnInit {
selectedDate: string;
// tslint:disable-next-line: no-inferrable-types
canadd: boolean = true;
// tslint:disable-next-line: no-inferrable-types
can: boolean = false;
fro1 = 'MDU';
t2 = 'CN';
// tslint:disable-next-line: no-inferrable-types
is: boolean = true;

myDate = new Date().toISOString();
customPickerOptions: any;
customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  from: any;
  to: any;

constructor(private route: Router, private navCtrl: NavController ) {
  this.customPickerOptions = {

    buttons: [{
      text: 'Save',
      handler: () => console.log('Clicked Save!')
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  };
}
ngOnInit() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.canadd = false;
      this.can = true;
    } else {
      this.canadd = true;
      this.can = false;
    }
  });
}

logout() {
  firebase.auth().signOut();
}

dateChanged(date) {
  console.log(date.detail.value);
  console.log(this.myDate);
}
// navigatee(path: string) {
//   this.navCtrl.navigateForward('tabs/home');
// }

navigate(path: string) {
  this.route.navigateByUrl('/' + path);
}
public swapValues() {
  const fro1 = this.fro1;
  this.fro1 = this.t2;
  this.t2 = fro1;
}
}
