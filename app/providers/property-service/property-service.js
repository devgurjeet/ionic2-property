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
var mock_properties_1 = require('./mock-properties');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var favorites = [];
var PropertyService = (function () {
    function PropertyService() {
    }
    PropertyService.prototype.findAll = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next(mock_properties_1.PROPERTIES);
            observer.complete();
        });
    };
    PropertyService.prototype.getFavorites = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next(favorites);
            observer.complete();
        });
    };
    PropertyService.prototype.favorite = function (property) {
        return Observable_1.Observable.create(function (observer) {
            var exists = false;
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i].id === property.id) {
                    exists = true;
                    break;
                }
            }
            if (!exists)
                favorites.push(property);
            observer.next();
            observer.complete();
        });
    };
    PropertyService.prototype.unfavorite = function (property) {
        return Observable_1.Observable.create(function (observer) {
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i].id === property.id) {
                    favorites.splice(i, 1);
                    break;
                }
            }
            observer.next();
            observer.complete();
        });
    };
    PropertyService.prototype.like = function (property) {
        return Observable_1.Observable.create(function (observer) {
            mock_properties_1.PROPERTIES[property.id - 1].likes++;
            observer.next(mock_properties_1.PROPERTIES[property.id - 1].likes);
            observer.complete();
        });
    };
    PropertyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PropertyService);
    return PropertyService;
}());
exports.PropertyService = PropertyService;
