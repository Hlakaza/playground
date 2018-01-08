import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GamesComponent } from './games/games.component';
import { RegisterComponent } from './register/register.component';
import { componentFactoryName } from '@angular/compiler';
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'games',
    component: GamesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent,
    FormsComponent,
    GridComponent,
    ModalsComponent,
    LoginComponent,
    TabsComponent,
    TabComponent,
    HeaderComponent,
    SliderComponent,
    GamesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
