import { NgModule } from '@angular/core';
import { RefundPolicyRoutingModule } from './refundpolicy-routing.module';
import { RefundPolicyComponent } from './refundpolicy.component';

@NgModule({
  imports: [
    RefundPolicyRoutingModule
  ],
  declarations: [RefundPolicyComponent],
  exports: [
    RefundPolicyComponent
],
})
export class RefundPolicyModule { }
