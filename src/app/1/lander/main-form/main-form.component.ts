import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
