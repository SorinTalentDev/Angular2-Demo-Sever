import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-thank-main',
  templateUrl: './thank-main.component.html',
  styleUrls: ['./thank-main.component.scss']
})
export class ThankMainComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
