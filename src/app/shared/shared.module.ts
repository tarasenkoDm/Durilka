import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { WordFormComponent } from './components/word-form/word-form.component';
import { DataItemComponent } from './components/data-item/data-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    WordFormComponent,
    DataItemComponent
  ],
  exports: [
    WordFormComponent,
    DataItemComponent
  ]
})
export class SharedModule { }
