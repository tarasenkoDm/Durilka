import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChooseRoleComponent } from './choose-role.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ChooseRoleComponent]
})
export class ChooseRoleModule { }
