import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
} )
export class RegistrationComponent implements OnInit {

  myRegForm: FormGroup;

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.myRegForm = this.fb.group( {
      'email': [null, [Validators.required, Validators.email]],
      'emailForCheck': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
      'passwordForCheck': [null, Validators.required]
    } );
  }

  onRegSubmit() {
    const infoReg: object = {
      'email': this.myRegForm.value.email,
      'password': this.myRegForm.value.password
    };

    console.log( infoReg );
  }

}
