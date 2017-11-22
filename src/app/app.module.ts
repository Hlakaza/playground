import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
