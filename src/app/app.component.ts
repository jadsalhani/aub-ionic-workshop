import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { CvFormPage } from "../pages/cv-form/cv-form";
import { RegisterPage } from "../pages/register/register";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LandingPage;
  public cvFormPage = CvFormPage;
  public registerPage = RegisterPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  /**
   * openPage
   */
  public openPage(page: any) {
    this.nav.push(page);
  }
}
