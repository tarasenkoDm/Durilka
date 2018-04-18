import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  wordsArr: object[] = [{word: 'one', description: 'one'}, {word: 'two', description: 'two'}, {word: 'three', description: 'three'}];
  createGame = true;
  clearForm = false;
  editInProcess: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onEdit(data: object) {
    this.wordsArr[data['index']] = data;
  }

  onDelete(data: object) {
    this.wordsArr.splice(data['index'], 1);
  }

  onFinish() {
    console.log(this.wordsArr);
  }

  onChangeWordForm(data: object) {
      this.wordsArr.push(data);
  }

  onEditInProcess(isInProcess: boolean) {
    this.editInProcess = isInProcess;
  }

}
