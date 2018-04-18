import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  joinGame = true;

  gameArr: object[] = [
    {word: 'first'},
    {word: 'second'},
    {word: 'third'},
    {word: 'fourth'},
    {word: 'fives'},
  ];

  // gameArr: object[] = [
  //   {word: 'first', description: 'des1'},
  //   {word: 'second', description: 'des2'},
  //   {word: 'third', description: 'des3'},
  //   {word: 'fourth', description: 'des4'},
  //   {word: 'fives', description: 'des5'},
  // ];

  constructor() {
  }

  ngOnInit() {
  }

  onEdit(data: object) {
    console.log(data);
    this.gameArr[data['index']] = data;
  }

  finish() {
    console.log(this.gameArr);
  }

}
