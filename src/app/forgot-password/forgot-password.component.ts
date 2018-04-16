import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
} )
export class ForgotPasswordComponent implements OnInit {

  myForgotPassForm: FormGroup;

  constructor( private router: Router, private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.myForgotPassForm = this.fb.group( {
      'email': [null, [Validators.required, Validators.email]]
    } );
  }

  onForgotPassSubmit() {
    // const info: object = {
    //   "email": this.myForgotPassForm.value.email
    // };
    const email = this.myForgotPassForm.value.email;

    // this.forgotPasswordService.forgotPass(email).subscribe(response => {
    //   this.mailMessage = true;
    //   setTimeout(() => {
    //     this.router.navigate(['/signin']);
    //   }, 2000);

    // }, error => {
    //   console.log('ErrForgotPass = ', error);
    // });

    console.log( email );
  }
}
