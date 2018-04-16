import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
} )
export class GameComponent implements OnInit {

  index: number = -1;

  gameArr: object[] = [
    {word: 'first', description: 'des1'},
    {word: 'second', description: 'des2'},
    {word: 'third', description: 'des3'},
    {word: 'fourth', description: 'des4'},
    {word: 'fives', description: 'des5'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onDescription( index ) {
    console.log( index );
    this.index = index;

  }

}
