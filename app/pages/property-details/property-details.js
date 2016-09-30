"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var property_service_1 = require('../../providers/property-service/property-service');
var broker_details_1 = require('../broker-details/broker-details');
var PropertyDetailsPage = (function () {
    function PropertyDetailsPage(navCtrl, navParams, propertyService) {
        this.navCtrl = navCtrl;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
        this.propertyService = propertyService;
        this.property = navParams.data.property;
    }
    Object.defineProperty(PropertyDetailsPage, "parameters", {
        get: function () {
            return [[ionic_angular_1.NavController], [ionic_angular_1.NavParams], [property_service_1.PropertyService]];
        },
        enumerable: true,
        configurable: true
    });
    PropertyDetailsPage.prototype.showBroker = function ($event, broker) {
        this.navCtrl.push(broker_details_1.BrokerDetailsPage, {
            broker: broker
        });
        console.log('broker Clicked!');
    };
    PropertyDetailsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/property-details/property-details.html',
            providers: [property_service_1.PropertyService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, property_service_1.PropertyService])
    ], PropertyDetailsPage);
    return PropertyDetailsPage;
}());
exports.PropertyDetailsPage = PropertyDetailsPage;
