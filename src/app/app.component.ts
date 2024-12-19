import { Component } from '@angular/core';
import { ValuesCarouselComponent } from './values-carousel/values-carousel.component';
import { GlobalPaymentsComponent } from './global-payments/global-payments.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ValuesCarouselComponent, GlobalPaymentsComponent, RouterModule],
})
export class AppComponent {}
