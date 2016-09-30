import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BrokerService {

  	constructor(private http: Http) {}

  	findAll() {
        return this.http.get('json/mock-brokers.json').map((res:Response) => res.json());
    }

}

