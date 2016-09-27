import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {PROPERTIES} from './mock-properties';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

var favorites = [];

@Injectable()
export class PropertyService {

    findAll() {

        console.log(PROPERTIES);

        return Observable.create(observer => {
            observer.next(PROPERTIES);
            observer.complete();
        });
    }

    getFavorites() {
        return Observable.create(observer => {
            observer.next(favorites);
            observer.complete();
        });
    }

    favorite(property) {
        return Observable.create(observer => {
            let exists = false;
            for (let i = 0; i < favorites.length; i++) {
                if (favorites[i].id === property.id) {
                    exists = true;
                    break;
                }
            }
            if (!exists) favorites.push(property);
            observer.next();
            observer.complete();
        });
    }

    unfavorite(property) {
        return Observable.create(observer => {
            for (let i = 0; i < favorites.length; i++) {
                if (favorites[i].id === property.id) {
                    favorites.splice(i, 1);
                    break;
                }
            }
            observer.next();
            observer.complete();
        });
    }

    like(property) {
        return Observable.create(observer => {
            PROPERTIES[property.id - 1].likes++;
            observer.next(PROPERTIES[property.id - 1].likes);
            observer.complete();
        });
    }

}