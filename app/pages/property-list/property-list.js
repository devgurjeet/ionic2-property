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
var property_details_1 = require('../property-details/property-details');
var property_service_1 = require('../../providers/property-service/property-service');
var PropertyListPage = (function () {
    function PropertyListPage(navCtrl, navParams, propertyService) {
        this.navCtrl = navCtrl;
        this.propertyService = propertyService;
        this.navCtrl = navCtrl;
        this.propertyService = propertyService;
        this.selectedItem = navParams.get('item');
    }
    Object.defineProperty(PropertyListPage, "parameters", {
        get: function () {
            return [[ionic_angular_1.NavController], [ionic_angular_1.NavParams], [property_service_1.PropertyService]];
        },
        enumerable: true,
        configurable: true
    });
    PropertyListPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init');
        this.propertyService.findAll().subscribe(function (data) { return _this.properties = data; });
    };
    PropertyListPage.prototype.itemTapped = function (event, property) {
        this.navCtrl.push(property_details_1.PropertyDetailsPage, {
            property: property
        });
        console.log('Item Clicked!');
    };
    PropertyListPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/property-list/property-list.html',
            providers: [property_service_1.PropertyService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, property_service_1.PropertyService])
    ], PropertyListPage);
    return PropertyListPage;
}());
exports.PropertyListPage = PropertyListPage;
