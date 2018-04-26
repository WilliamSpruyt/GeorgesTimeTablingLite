import { Injectable } from '@angular/core';
import { Stat } from '../stat';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseURL';

import 'rxjs/add/operator/toPromise';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class StatsService {

  constructor(private restangular: Restangular, private http: Http) { }

  getStats(): Observable<Stat[]> {
     
    return this.restangular.all('stats').getList();
  }

  submitFeedback(stats): Observable<Stat> {
     
    return this.restangular.all('stats/add').post(stats);
  }
 // get("/api/contacts")
 
 
              




}
