import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {LoginService} from './service/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {
}
