import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedCommonModule } from 'src/app/_shared/sharedmodule';
import { RegisterPartnerComponent } from './register-partner.component';
import { RegisterPartnerRoutingModule } from './register-partner-routing.module';

@NgModule({
  imports: [
    RegisterPartnerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedCommonModule
  ],
  declarations: [RegisterPartnerComponent],
  exports: [
    RegisterPartnerComponent
  ],
})
export class RegisterPartnerModule { }
