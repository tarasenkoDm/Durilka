import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  mySignInForm: FormGroup;

  errMessage: string = '';

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.mySignInForm = this.fb.group( {
      'email': [ null, [Validators.required, Validators.email]],
      'password': [ null, Validators.required ]
    } );
  }

  onSignInSubmit() {
    const infoSignIn: object = {
      "email": this.mySignInForm.value.email,
      "password": this.mySignInForm.value.password
    };
    // this.signInService.signIn(infoSignIn).subscribe(response => {
    //   this.router.navigate(['/order-history']);
    // }, error => {
    //   console.log('ErrChangePass = ', error);
    //   this.errMessage = error;
    // });
    console.log( infoSignIn );

    this.router.navigate(['/choose-role']);
  }
}
