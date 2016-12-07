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
  public pageName;
  public hideTerms = true;
  public hidePrivacy = true;
  public hideContact = true;
  public hideIngredients = true;
  public headerString;

  public show(pageName) {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);

    // Check which link was clicked
    if (pageName == 'terms') {
      // Set the displayed selector to be terms
      this.hideTerms = false;
      // Change the header to be "Terms and Conditions"
      this.headerString = "Terms and Conditions";
    } else if (pageName == 'privacy') {
      // Set the displayed selector to be privacy
      this.hidePrivacy = false;
      // Change the header to be "Privacy Policy"
      this.headerString = "Privacy Policy";
    } else if (pageName == 'contact') {
      // Set the displayed selector to be contact
      this.hideContact = false;
      // Change the header to be "Contact Us"
      this.headerString = "Contact Us";
    } else if (pageName == 'ingredients') {
      // Set the displayed selector to be ingredients
      this.hideIngredients = false;
      // Change the header to be "Privacy"
      this.headerString = "Ingredients";
    }
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    // Reset our boolean values
    this.hideTerms = true;
    this.hidePrivacy = true;
    this.hideContact = true;
    this.hideIngredients = true;
  }
}
