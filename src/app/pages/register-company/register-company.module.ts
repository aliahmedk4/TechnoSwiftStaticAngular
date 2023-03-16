import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialCharacterDirective } from 'src/app/_directive/onlyalphanumeric';
import { CharacterDirective } from 'src/app/_directive/onlycharacter';
import { NumberDirective } from 'src/app/_directive/onlynumber';
import { RegisterCompanyRoutingModule } from './register-company-routing.module';
import { RegisterCompanyComponent } from './register-company.component';

@NgModule({
  imports: [
    RegisterCompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [RegisterCompanyComponent],
  exports: [
    RegisterCompanyComponent
],
})
export class RegisterCompanyModule { }
