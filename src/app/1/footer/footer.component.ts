import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalDirective } from '../../global.directive';
import { ModalComponent } from './modal/modal.component';
import { TermsComponent } from './modal/terms/terms.component';
import { ContactComponent } from './modal/contact/contact.component';
import { PrivacyComponent } from './modal/privacy/privacy.component';
import { IngredientsComponent } from './modal/ingredients/ingredients.component';

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

  @ViewChild(TermsComponent)
  public readonly terms: TermsComponent;

  ngOnInit() {
  }

}
