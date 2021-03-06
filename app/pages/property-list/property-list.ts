import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../providers/property-service/property-service';

@Component({
  	templateUrl: 'build/pages/property-list/property-list.html',
  	providers: [PropertyService]
})
export class PropertyListPage {
	properties;
    selectedItem;


	constructor(private navCtrl: NavController,navParams: NavParams, public propertyService: PropertyService) {
        this.navCtrl             = navCtrl;
        this.propertyService     = propertyService;
        this.selectedItem        = navParams.get('property');
	}

    static get parameters() {
        return [[NavController], [NavParams], [PropertyService]];
    }

    ngOnInit() {
        console.log('init');
        this.propertyService.findAll().subscribe(
            data => this.properties = data
        );


    }

    itemTapped(event, property) {
        this.navCtrl.push(PropertyDetailsPage, {
            property: property
        });
        console.log('Item Clicked!');
    }

}
