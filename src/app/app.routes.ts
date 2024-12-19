import { Routes } from '@angular/router';
import { GlobalPaymentsComponent } from './global-payments/global-payments.component';
import { ValuesCarouselComponent } from './values-carousel/values-carousel.component';

export const routes: Routes = [
  { path: 'globe', component: GlobalPaymentsComponent },
  { path: 'carousel', component: ValuesCarouselComponent },
];
