import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Alert} from './alert/alert';
import {AlertMessageService} from './alert/service/alertMessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public alerts: Array<Alert> = [];

  constructor(private alertService: AlertMessageService) { }

  ngOnInit() {
    this.alertService.alerts.subscribe(alert => {
      this.alerts.push(alert);
    })
  }

  // constructor(public afAuth: AngularFireAuth) {
  // }
  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
