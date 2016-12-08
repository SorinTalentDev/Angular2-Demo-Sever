import { Component } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent {
  public hideBilling = true;

  public toggleHiddenBilling() {
    this.hideBilling = !this.hideBilling;
  }
}
