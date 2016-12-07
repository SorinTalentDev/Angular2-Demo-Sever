import { Component, OnInit } from '@angular/core';
import { ThankMainComponent } from './thank-main/thank-main.component';
import { GlobalDirective } from '../../global.directive';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
