import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './pages/component/common/layouts/layouts.module';
import { CharacterDirective } from './_directive/onlycharacter';
import {  } from './_directive/onlynumber';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorProviders } from './_helpers/tokenintercept';

@NgModule({
  declarations: [
    AppComponent,CharacterDirective
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  exports: [
  ],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] //
})
export class AppModule { }
