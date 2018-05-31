import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Alert} from '../alert';

@Injectable()
export class AlertMessageService {

  public alerts: Subject<Alert> = new Subject();

  constructor() { }

}
