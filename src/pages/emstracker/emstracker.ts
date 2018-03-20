import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { dive } from 'scuba-dive';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'page-emstracker',
  templateUrl: 'emstracker.html'
})
export class EMSTrackerPage {

  timeStamp: number;
  iDive: dive

  constructor(public navCtrl: NavController) {
  }

  onClickDispatched() {

    this.timeStamp = Date.now();
    window.localStorage.setItem("Dispatched", this.timeStamp.toString());
    alert(this.timeStamp);

    let dp = new DatePipe('en-US');
    let name = dp.transform(new Date(), 'ddMMyyyy');
    console.log(name);
    alert(name);

  }

  onClickEnroute() {

  }

  onClickOnscene() {

  }

  onClickAtPatient() {

  }

  onClickDepart() {

  }
}
