import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { CvFormPage } from '../pages/cv-form/cv-form';
import { FormsProvider } from "../providers/forms-provider";
import { DetailsPage } from '../pages/details/details';
import { RegisterPage } from "../pages/register/register";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    CvFormPage,
    DetailsPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    CvFormPage,
    DetailsPage,
    RegisterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage,
    FormsProvider
  ]
})
export class AppModule { }
