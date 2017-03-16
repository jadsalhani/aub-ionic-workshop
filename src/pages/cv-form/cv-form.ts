import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
// import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CVForm } from '../../classes/cv-form';
import { FormsProvider } from '../../providers/forms-provider';

@Component({
  selector: 'page-cv-form',
  templateUrl: 'cv-form.html'
})
export class CvFormPage {

  public formGroup: FormGroup;
  public profession: string = "ps";
  public isGraduated = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _loadingController: LoadingController,
    private _storage: Storage,
    public formsProvider: FormsProvider) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      email: new FormControl('test@test.com', [Validators.required]),
      country: new FormControl('Lebanon', [Validators.required])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvFormPage');
  }

  public doCreate() {
    if (!this.formGroup.valid) {
      window.alert("Your input is invalid");
      return;
    }

    // Form control values
    let name = this.formGroup.get('name').value;
    let email = this.formGroup.get('email').value;
    let phoneNumber = this.formGroup.get('phoneNumber').value;
    let country = this.formGroup.get('country').value;

    let isGraduated = this.isGraduated; // NgModel variables
    let profession = this.profession;

    let loader = this._loadingController.create({
      content: "Saving form..",
      duration: 3000
    });

    loader.present();

    // TODO: Something that saves to the server
    window.setTimeout(() => {
      console.log('I waited 3 seconds');
    }, 3000);

    let cvForm = new CVForm(
      name,
      email,
      phoneNumber,
      country,
      isGraduated,
      profession
    );

    this.formsProvider.addForm(cvForm);

    this.formsProvider.saveToStorage();

    console.log(cvForm);
  }

}
