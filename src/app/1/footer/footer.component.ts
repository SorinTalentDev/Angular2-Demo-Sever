import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalDirective } from '../../global.directive';
import { ModalComponent } from './modal/modal.component';
import { TermsComponent } from '../terms/terms.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  //providers: [GlobalDirective]
})

export class FooterComponent implements OnInit {


  constructor (public echos: GlobalDirective) {}

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  ngOnInit() {
  }

}
