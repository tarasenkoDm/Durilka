import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SignupComponent} from './signup.component';
import {SignupService} from './service/signup.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [SignupComponent],
  providers: [SignupService]
})
export class SignupModule {
}
