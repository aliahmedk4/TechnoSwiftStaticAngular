import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contactus-routing.module';
import { ContactUsComponent } from './contactus.component';

@NgModule({
  imports: [
    ContactUsRoutingModule,FormsModule,ReactiveFormsModule,CommonModule
  ],
  declarations: [ContactUsComponent],
  exports: [
    ContactUsComponent
],
})
export class ContactUsModule { }
