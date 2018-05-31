import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Alert} from '../alert/alert';
import {AlertType} from '../alert/alert-type.enum';
import {AlertMessageService} from '../alert/service/alertMessage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private alertMessageService: AlertMessageService) {
  }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm(): void {
    this.signupForm = new FormGroup({
      'nickName': new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      'email': new FormControl(null, {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }),
      'password': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
      })
    });
  }

  onSubmit(): void {
    if(this.signupForm.valid){
      // TODO call the auth service
      const {nickName, email, password} = this.signupForm.value;
      console.log(`Nick-name: ${nickName}, Email: ${email}, Password: ${password}`);
    } else {
      const failSignupAlert = new Alert('Please enter valid nick-name, email, password!', AlertType.Danger);
      this.alertMessageService.alerts.next(failSignupAlert);
    }

  }
}
