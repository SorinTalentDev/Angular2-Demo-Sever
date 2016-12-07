import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-cs-1',
  templateUrl: './cs-1.component.html',
  styleUrls: ['./cs-1.component.scss']
})
export class Cs1Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
