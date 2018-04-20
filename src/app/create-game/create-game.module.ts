import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateGameComponent } from './create-game.component';
import { SharedModule } from '../shared/shared.module';
import {CreateGameService} from './create-game.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [CreateGameComponent],
  providers: [CreateGameService]
})
export class CreateGameModule { }
