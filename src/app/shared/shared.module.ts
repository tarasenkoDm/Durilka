import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { WordFormComponent } from './components/word-form/word-form.component';
import { DataItemComponent } from './components/data-item/data-item.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    WordFormComponent,
    DataItemComponent,
    NavComponent
  ],
  exports: [
    WordFormComponent,
    DataItemComponent,
    NavComponent
  ]
})
export class SharedModule { }
