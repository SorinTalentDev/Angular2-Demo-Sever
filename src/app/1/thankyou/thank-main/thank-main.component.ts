import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { MainFormComponent } from '../../lander/main-form/main-form.component';

@Component({
  selector: 'app-thank-main',
  templateUrl: './thank-main.component.html',
  styleUrls: ['./thank-main.component.scss'],
  providers:[MainFormComponent]
})
export class ThankMainComponent implements OnInit {

  

  constructor (public echos: GlobalDirective,public form: MainFormComponent) {}

  ngOnInit() {
  }

}
