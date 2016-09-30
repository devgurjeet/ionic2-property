import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import {BrokerService} from '../../providers/broker-service/broker-service';

@Component({
  templateUrl: 'build/pages/broker-details/broker-details.html',
})
export class BrokerDetailsPage {
  	broker;

  	constructor(public navCtrl: NavController, navParams: NavParams) {
    	this.navCtrl = navCtrl;
    	this.broker  = navParams.data.broker;
  	}
}
