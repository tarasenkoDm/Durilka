import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Alert} from '../alert/alert';
import {AlertType} from '../alert/alert-type.enum';
import {AlertMessageService} from '../alert/service/alertMessage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private alertMessageService: AlertMessageService) {
  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = new FormGroup({
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

    if (this.loginForm.valid) {
      // TODO call the auth service
      const {email, password} = this.loginForm.value;
      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      const failedLoginAlert = new Alert('Please enter valid email, password!', AlertType.Danger);
      this.alertMessageService.alerts.next(failedLoginAlert);
    }


  }
}
