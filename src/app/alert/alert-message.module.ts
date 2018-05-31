import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AlertMessageService} from './service/alertMessage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AlertMessageService]
})
export class AlertMessageModule { }
