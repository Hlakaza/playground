import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
// Services
import { ModalService } from './services/modal.service';

// Directives
import { ModalDirective } from './directives/modal.directive';

// Components
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GamesComponent } from './games/games.component';
import { RegisterComponent } from './register/register.component';
import { componentFactoryName } from '@angular/compiler';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { HomeComponent } from './home/home.component';
import { SlotsComponent } from './slots/slots.component';
import { BalancesComponent } from './balances/balances.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { SportsComponent } from './betway/sports/sports.component';

const appRoutes: Routes = [
  { path: '', component: StyleguideComponent },
  { path: 'betway', component: SportsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent,
    FormsComponent,
    GridComponent,
    ModalComponent,
    LoginComponent,
    TabsComponent,
    TabComponent,
    HeaderComponent,
    SliderComponent,
    GamesComponent,
    RegisterComponent,
    StyleguideComponent,
    HomeComponent,
    SlotsComponent,
    BalancesComponent,
    ModalDirective,
    InboxComponent,
    ProfileComponent,
    SportsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
