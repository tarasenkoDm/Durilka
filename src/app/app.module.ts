import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CreateGameModule} from './create-game/create-game.module';
import {HomeModule} from './home/home.module';
import {NotFoundModule} from './not-found/not-found.module';
import {RegistrationModule} from './registration/registration.module';
import {SignInModule} from './sign-in/sign-in.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';
import {ChooseRoleModule} from './choose-role/choose-role.module';
import {GameModule} from './game/game.module';
import {ChooseGameModule} from './choose-game/choose-game.module';
import {LayoutModule} from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {SignupModule} from './signup/signup.module';
import {AlertMessageModule} from './alert/alert-message.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CreateGameModule,
    HomeModule,
    NotFoundModule,
    RegistrationModule,
    SignInModule,
    ForgotPasswordModule,
    ChooseRoleModule,
    GameModule,
    ChooseRoleModule,
    ChooseGameModule,
    LayoutModule,
    LoginModule,
    SignupModule,
    AlertMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
