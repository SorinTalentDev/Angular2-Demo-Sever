<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../global.directive';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
>>>>>>> john

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  //providers: [GlobalDirective]
})

export class FooterComponent implements OnInit {

<<<<<<< HEAD
  constructor (public echos: GlobalDirective) {}
=======
  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  constructor() { }
>>>>>>> john

  ngOnInit() {
  }

}
