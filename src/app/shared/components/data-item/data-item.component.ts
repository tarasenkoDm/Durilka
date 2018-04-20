import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss']
})
export class DataItemComponent implements OnInit, OnChanges {

  @Input() data: object;
  @Input() index: number;
  @Input() createGame: boolean;
  @Input() joinGame: boolean;
  @Output() edit = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  @Output() editInProcess = new EventEmitter<boolean>();

  dataItem: object;
  itemIndex: number;
  editItem: boolean;
  editInPro: boolean;
  descriptionActive: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataItem = changes.data.currentValue;
    }
    if (changes.index) {
      this.itemIndex = changes.index.currentValue;
    }
  }

  onEdit() {
    this.editInPro = !this.editInPro;
    this.editItem = !this.editItem;
    this.editInProcess.emit(this.editInPro);
  }

  onDelete() {
    this.dataItem['index'] = this.itemIndex;
    this.delete.emit(this.dataItem);
  }

  onChangeWordForm(data: object) {
    data['index'] = this.itemIndex;
    this.edit.emit(data);
    this.editItem = !this.editItem;
    this.editInProcess.emit(false);
    console.log(data);
  }

  onStopEdit() {
    this.onEdit();
    this.descriptionActive = false;
  }

  onDescription() {
    this.onEdit();
    this.descriptionActive = true;
  }
}
