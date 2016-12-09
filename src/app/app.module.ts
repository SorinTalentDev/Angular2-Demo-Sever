import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Landing Page
import { LanderComponent } from './1/lander/lander.component';
import { MainInfoComponent } from './1/lander/main-info/main-info.component';
import { MainFormComponent } from './1/lander/main-form/main-form.component';
import { Cs1Component } from './1/lander/cs-1/cs-1.component';
import { Cs2Component } from './1/lander/cs-2/cs-2.component';

// Checkout Page
import { CheckoutComponent } from './1/checkout/checkout.component';
import { CheckHeaderComponent } from './1/checkout/check-header/check-header.component';
import { CheckFormComponent } from './1/checkout/check-form/check-form.component';
import { CheckMainComponent } from './1/checkout/check-main/check-main.component';

// Thank You Page
import { ThankMainComponent } from './1/thankyou/thank-main/thank-main.component';
import { ThankyouComponent } from './1/thankyou/thankyou.component';


// Terms Page


// Terms, Privacy, Contact, and Ingredients Pages
import { TermsComponent } from './1/footer/modal/terms/terms.component';
import { PrivacyComponent } from './1/footer/modal/privacy/privacy.component';
import { ContactComponent } from './1/footer/modal/contact/contact.component';
import { IngredientsComponent } from './1/footer/modal/ingredients/ingredients.component';

// Footer
import { FooterComponent } from './1/footer/footer.component';

// Modal
import { ModalComponent } from './1/footer/modal/modal.component';

// Navigation-Routing
import { routing } from './app.routing';

// Global Variables
import { GlobalDirective } from './global.directive';



@NgModule({
  declarations: [
    AppComponent,
    LanderComponent,
    CheckoutComponent,
    ThankyouComponent,
    FooterComponent,
    MainInfoComponent,
    MainFormComponent,
    Cs1Component,
    Cs2Component,
    CheckFormComponent,
    CheckMainComponent,
    ThankMainComponent,
    CheckHeaderComponent,
    GlobalDirective,
    TermsComponent,
    ModalComponent,
    PrivacyComponent,
    ContactComponent,
    IngredientsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [GlobalDirective, Title],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
