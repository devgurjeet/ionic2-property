import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {PropertyService} from '../../providers/property-service/property-service';
import {BrokerDetailsPage} from '../broker-details/broker-details';


@Component({
    templateUrl: 'build/pages/property-details/property-details.html',
    providers: [PropertyService]
})

export class PropertyDetailsPage {
    property;

    static get parameters() {
        return [[NavController], [NavParams], [PropertyService]];
    }

    constructor(private navCtrl: NavController,navParams: NavParams, public propertyService: PropertyService) {
        this.navCtrl         = navCtrl;
        this.propertyService = propertyService;
        this.property        = navParams.data.property;
    }

    showBroker($event, broker) {
       this.navCtrl.push(BrokerDetailsPage, {
            broker: broker
        });
        console.log('broker Clicked!');
    }


}
