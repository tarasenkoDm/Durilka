import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
} )
export class CreateGameComponent implements OnInit {

  wordsArr: object[] = [];
  index = -1;
  dataForEdit: Object = null;

  constructor() {
  }

  ngOnInit() {
  }

  onEdit( index ) {
    this.index = index;
    this.dataForEdit = this.wordsArr[index];
  }

  onCancelWordForm() {
    this.index = -1;
  }

  onDelete( index ) {
    this.wordsArr.splice( index, 1 );
  }

  onFinish() {
    console.log( this.wordsArr );
  }

  onChangeWordForm( data: Object ) {
    if (this.index >= 0) {
      this.wordsArr[this.index] = data;
      this.index = -1;
    } else {
      this.wordsArr.push( data );
    }
  }

}
