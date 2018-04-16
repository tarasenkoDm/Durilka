import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
} )
export class WordFormComponent implements OnInit, OnChanges {

  @Input() dataForEdit: Object;
  @Output() changeWordForm = new EventEmitter<Object>();
  @Output() canceledWordForm = new EventEmitter();

  myNewWordForm: FormGroup;

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.initForm( this.dataForEdit || null );
  }

  ngOnChanges( changes: SimpleChanges ) {
    this.initForm( changes.dataForEdit.currentValue );
  }

  initForm( dataForEdit? ) {
    this.myNewWordForm = this.fb.group( {
      'word': [dataForEdit ? dataForEdit['word'] : null, Validators.required],
      'description': [dataForEdit ? dataForEdit['description'] : null, Validators.required]
    } );
  }

  onSubmit() {
    const formEvent = {
      word: this.myNewWordForm.value.word,
      description: this.myNewWordForm.value.description
    };

    this.changeWordForm.emit( formEvent );
    this.initForm();
  }

  onCancel() {
    this.initForm();
    this.canceledWordForm.emit();
  }
}
