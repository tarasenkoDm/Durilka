import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.scss']
} )
export class ChooseGameComponent implements OnInit {

  myJoinForm: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router) {
  }

  ngOnInit() {
    this.myJoinForm = this.fb.group( {
      'gameId': [null, Validators.required]
    } );
  }

  onJoin() {
    console.log( this.myJoinForm.value.gameId );
    this.router.navigate(['/game/1']);
  }

}
