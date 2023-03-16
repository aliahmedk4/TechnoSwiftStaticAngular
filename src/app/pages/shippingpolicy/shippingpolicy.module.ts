import { NgModule } from '@angular/core';
import { ShippingPolicyRoutingModule } from './shippingpolicy-routing.module';
import { ShippingPolicyComponent } from './shippingpolicy.component';

@NgModule({
  imports: [
    ShippingPolicyRoutingModule
  ],
  declarations: [ShippingPolicyComponent],
  exports: [
    ShippingPolicyComponent
],
})
export class ShippingPolicyModule { }
