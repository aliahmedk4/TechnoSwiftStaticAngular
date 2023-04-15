import { NgModule } from '@angular/core';
import { ContactUsRoutingModule } from './contactus-routing.module';
import { ContactUsComponent } from './contactus.component';

@NgModule({
  imports: [
    ContactUsRoutingModule
  ],
  declarations: [ContactUsComponent],
  exports: [
    ContactUsComponent
],
})
export class ContactUsModule { }
