import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent implements OnInit, OnChanges {

  @Input() dataForEdit: Object;
  @Input() clearForm: boolean;
  @Input() editInProcess: boolean;
  @Input() joinGame: boolean;
  @Output() changeWordForm = new EventEmitter<Object>();
  @Output() stopEdit = new EventEmitter();

  myNewWordForm: FormGroup;
  editInPro: boolean;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm(this.dataForEdit || null);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataForEdit) {
      this.initForm(changes.dataForEdit.currentValue);
    }
    if (changes.clearForm && changes.clearForm.currentValue) {
      this.initForm();
    }
    if (changes.editInProcess) {
      this.editInPro = changes.editInProcess.currentValue;
    }
  }

  initForm(dataForEdit?) {
    this.myNewWordForm = this.fb.group({
      'word': [dataForEdit ? dataForEdit['word'] : null, Validators.required],
      'description': [dataForEdit ? dataForEdit['description'] : null, Validators.required]
    });
  }

  onSubmit() {
    const formEvent = {
      word: this.myNewWordForm.value.word,
      description: this.myNewWordForm.value.description
    };
    this.changeWordForm.emit(formEvent);
    this.initForm();
  }

  onClear() {
    if (this.joinGame) {
      this.initForm({word: this.dataForEdit['word']});
    } else {
      this.initForm();
    }
  }

  onClose() {
    this.stopEdit.emit();
  }
}
