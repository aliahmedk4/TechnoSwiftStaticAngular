import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCompanyRoutingModule } from './register-company-routing.module';
import { RegisterCompanyComponent } from './register-company.component';
import { SharedCommonModule } from 'src/app/_shared/sharedmodule';

@NgModule({
  imports: [
    RegisterCompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedCommonModule
  ],
  declarations: [RegisterCompanyComponent],
  exports: [
    RegisterCompanyComponent
],
})
export class RegisterCompanyModule { }
