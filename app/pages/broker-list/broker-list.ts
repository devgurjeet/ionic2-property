import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {BrokerDetailsPage} from '../broker-details/broker-details';

import {BrokerService} from '../../providers/broker-service/broker-service';

@Component({
  	templateUrl: 'build/pages/broker-list/broker-list.html',
  	providers: [BrokerService]
})
export class BrokerListPage {
	brokers;
    selectedItem;

 	constructor(private navCtrl: NavController,navParams: NavParams, public brokerService: BrokerService) {
        this.navCtrl       = navCtrl;
        this.brokerService = brokerService;
        this.selectedItem  = navParams.get('broker');
	}

	static get parameters() {
        return [[NavController], [NavParams], [BrokerService]];
    }

    ngOnInit() {
        console.log('init at');
        this.brokerService.findAll().subscribe(
            data => this.brokers = data
        );
    }

    itemTapped(event, broker) {
        console.log('Item Clicked!');
        this.navCtrl.push(BrokerDetailsPage, {
            broker: broker
        });
    }
}