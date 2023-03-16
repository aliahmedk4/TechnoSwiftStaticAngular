import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";


import {BasicLayoutComponent} from "./basicLayout.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TopNavbarComponent } from "../topnavbar/topnavbar.component";
import { TopNavigationNavbarComponent } from "../topnavbar/topnavigationnavbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CharacterDirective } from "src/app/_directive/onlycharacter";


@NgModule({
  declarations: [
    BasicLayoutComponent,
    TopNavbarComponent,
    FooterComponent,
    TopNavigationNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    BasicLayoutComponent,
    TopNavbarComponent,
    FooterComponent,
    TopNavigationNavbarComponent
  ],
})

export class LayoutsModule {}
