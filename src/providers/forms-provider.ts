import { Injectable } from '@angular/core';
import { CVForm } from "../classes/cv-form";
import { Storage } from '@ionic/storage';

@Injectable()
export class FormsProvider {

  private _cvFormsArray: CVForm[] = [];

  constructor(
    private _storage: Storage
  ) {
    console.log('Hello FormsProvider Provider');
  }

  public addForm(form: CVForm){
    this._cvFormsArray.push(form);
  }

  /**
   * saveToStorage
   */
  public saveToStorage() {
    this._storage.set('forms', this._cvFormsArray);
  }

}
