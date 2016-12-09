import { Component } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent {
  checkForm : FormGroup;

  constructor(fb: FormBuilder){
    this.checkForm = fb.group({
      'billaddress' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'billcity': [null, Validators.required],
      'billstate': [null, Validators.required],
      'billcountry': [null, Validators.required],
      'billzip': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      'ccnumber': [null, Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(15)])],
      'cardExpMonth': [null, Validators.required],
      'cardExpYear': [null, Validators.required],
      'cvvnumber': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(4)])],
      'confirm': false
    })
  }

  submitForm(value: any){
    console.log(value);
  }

  public hideBilling = true;

  public toggleHiddenBilling() {
    this.hideBilling = !this.hideBilling;
  }
}
