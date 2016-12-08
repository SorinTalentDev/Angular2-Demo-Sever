import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
  // template: `
  // <div class="ui raised segment">
  //   <h2 class="ui header">Demo Form: Sku</h2>
  //   <form #f="ngForm"
  //         (ngSubmit)="onSubmit(f.value)"
  //         class="ui form">
  //
  //     <div class="field">
  //       <label for="skuInput">SKU</label>
  //       <input type="text"
  //              id="skuInput"
  //              placeholder="SKU"
  //              name="sku" ngModel>
  //     </div>
  //
  //     <button type="submit" class="ui button">Submit</button>
  //   </form>
  // </div>
  // `
})
export class MainFormComponent implements OnInit {
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
