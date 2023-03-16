import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './pages/component/common/layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterDirective } from './_directive/onlycharacter';
import { NumberDirective } from './_directive/onlynumber';
import { SpecialCharacterDirective } from './_directive/onlyalphanumeric';

@NgModule({
  declarations: [
    AppComponent,CharacterDirective,NumberDirective,CharacterDirective,SpecialCharacterDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  exports: [
    NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] //
})
export class AppModule { }
