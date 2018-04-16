import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { WordFormComponent } from './components/word-form/word-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    WordFormComponent
  ],
  exports: [
    WordFormComponent
  ]
})
export class SharedModule { }
