import { NgModule } from '@angular/core';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    PrivacyRoutingModule
  ],
  declarations: [PrivacyComponent],
  exports: [
    PrivacyComponent
],
})
export class PrivacyModule { }
