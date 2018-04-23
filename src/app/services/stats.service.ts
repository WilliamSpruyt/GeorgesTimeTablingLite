import { Injectable } from '@angular/core';
import { Stat } from '../stat';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { baseURL} from '../shared/baseURL';

import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class StatsService {

  constructor(private restangular: Restangular) { }

  getStats(): Observable<void | Stat[]> {
    console.log('getStats is getting!');
    return this.restangular.all('stats').getList();
  }
  submitFeedback(stats): Observable<Stat> {
    console.log('in the service ' + stats.id)
    return this.restangular.all('stats/add').post(stats);
  }


}
constructor(private http: Http) { }

// get("/api/contacts")
getContacts(): Promise < void | Contact[] > {
  return this.http.get(this.contactsUrl)
    .toPromise()
    .then(response => response.json() as Contact[])
    .catch(this.handleError);
}
