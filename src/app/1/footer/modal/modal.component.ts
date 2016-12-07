import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public visible = false;
  private visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  @ViewChild(TermsComponent)
  public readonly terms: TermsComponent;

  @Input() header: string = "Terms and Conditions";
}
