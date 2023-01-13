import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';


// a b c d e f g h i j k l m n o p q r s t u v w x y z

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent
  ],
  exports: [
    NavbarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
