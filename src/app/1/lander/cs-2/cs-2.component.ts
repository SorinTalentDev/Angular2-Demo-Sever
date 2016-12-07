import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
@Component({
  selector: 'app-cs-2',
  templateUrl: './cs-2.component.html',
  styleUrls: ['./cs-2.component.scss']
})
export class Cs2Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
