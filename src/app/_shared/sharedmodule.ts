import {NgModule} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NumberDirective } from "../_directive/onlynumber";
import { SpecialCharacterDirective } from "../_directive/onlyalphanumeric";
import { EmailValidatorDirective } from "../_directive/validateEmail";
import { CapitalizeFirstLetterDirective } from "../_directive/capitalize";


@NgModule({
  declarations: [
    NumberDirective,SpecialCharacterDirective,EmailValidatorDirective,CapitalizeFirstLetterDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,FormsModule,NgxSpinnerModule,ReactiveFormsModule,NumberDirective,
    SpecialCharacterDirective,EmailValidatorDirective,CapitalizeFirstLetterDirective
],
})

export class SharedCommonModule {}
