import { RouterModule, Routes } from "@angular/router";

import { LanderComponent } from './1/lander/lander.component';
import { CheckoutComponent } from './1/checkout/checkout.component';
import { ThankyouComponent } from './1/thankyou/thankyou.component';

const APP_ROUTES: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'lander', component: LanderComponent },
  { path: '', component: LanderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
