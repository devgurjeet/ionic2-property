import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {PROPERTIES} from './mock-properties';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

var favorites = [];


@Injectable()
export class PropertyService {
    constructor(private http:Http) { }

    findAll() {
        return this.http.get('json/mock-properties.json').map((res:Response) => res.json());
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