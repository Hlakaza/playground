import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent,
    FormsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
