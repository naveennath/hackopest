import { Calendar } from '@ionic-native/calendar/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { firebasecrds } from './../Firebase_config';
import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe} from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line: max-line-length
  imports: [BrowserModule, IonicModule.forRoot(),  AppRoutingModule, AngularFireModule.initializeApp(firebasecrds), AngularFireAuthModule, AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    NavController,
    DatePicker,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
