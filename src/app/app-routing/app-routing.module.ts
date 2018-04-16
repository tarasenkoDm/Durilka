import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../layout/main.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegistrationComponent } from '../registration/registration.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ChooseRoleComponent } from '../choose-role/choose-role.component';
import { CreateGameComponent } from '../create-game/create-game.component';
import { GameComponent } from '../game/game.component';
import { ChooseGameComponent } from '../choose-game/choose-game.component';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // { path: '', redirectTo: 'productList/cobalt', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'game/:id', component: GameComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'choose-role', component: ChooseRoleComponent},
      {path: 'create-game', component: CreateGameComponent},
      {path: 'choose-game', component: ChooseGameComponent}
    ]
  },

  {path: 'not-found', component: NotFoundComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'not-found'}
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
