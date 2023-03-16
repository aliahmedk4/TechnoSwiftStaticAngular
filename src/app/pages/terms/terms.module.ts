import { NgModule } from '@angular/core';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';

@NgModule({
  imports: [
    TermsRoutingModule
  ],
  declarations: [TermsComponent],
  exports: [
    TermsComponent
],
})
export class TermsModule { }
