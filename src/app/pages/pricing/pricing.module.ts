import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PricingRoutingModule,CommonModule
  ],
  declarations: [PricingComponent],
  exports: [
    PricingComponent
],
})
export class PricingModule { }
