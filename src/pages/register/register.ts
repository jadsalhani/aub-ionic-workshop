import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http) {

      this.formGroup = new FormGroup({
        'name' : new FormControl(''),
        'email' : new FormControl(''),
        'password' : new FormControl(''),
        'confirmPassword' : new FormControl(''),
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  /**
   * doRegister
   */
  public doRegister() {

    let params = {
      name: this.formGroup.get("name").value,
      email: this.formGroup.get("email").value,
      password: this.formGroup.get("password").value,
      password_confirmation: this.formGroup.get("confirmPassword").value,
    };

    this._http.post("https://jadsalhani.com/api/auth/register", params)
    .map(result => result.json())
    .subscribe((response) => {
      console.log(response);
    });

  }

}
