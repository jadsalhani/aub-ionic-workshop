import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CvFormPage } from '../cv-form/cv-form';

import { Storage } from '@ionic/storage';
import { CVForm } from "../../classes/cv-form";
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  public forms: CVForm[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _modalController: ModalController,
    private _storage: Storage) {}

  ionViewDidEnter() {
    this._storage.get('forms').then((forms) => {
      this.forms = forms;
    });

    // this._storage.get('forms').then(function(forms) {
    //   this.forms = forms;
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  /**
   * showForm
   */
  public showForm() {
    let formModal = this._modalController.create(CvFormPage);
    formModal.present();
  }
  public viewDetails(form){
    this.navCtrl.push(DetailsPage, {
      form: form
    });
  }
}
