import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CVForm} from '../../classes/cv-form';
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  public form: any = new CVForm("", "", 0, "", false, "");
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  ionViewDidEnter(){
    this.form = this.navParams.get("form");
  }
}
