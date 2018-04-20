import { Injectable } from '@angular/core';
import { Stat } from '../stat';
import {Http,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { baseURL} from '../shared/baseURL';

import {RestangularModule,Restangular} from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class StatsService {

  constructor(private restangular: Restangular,private http: HttpClient) { }

  getStats(): Observable<Stat[]> {

    return this.restangular.all('stats').getList();
  }
  submitFeedback(stats) :Observable<Stat>
   {
  console.log('in the service '+stats.id)
   return this.restangular.all('stats/add').post(stats);}


 }

    /* submitFeedback(stats) {
       const uri = 'http://localhost:4000/stats/add';
       const obj = {
         id: stats.id,
         time: stats.time,
         numQs: stats.numQs,
         date: stats.date,
         avTime: stats.avTime,
         name: stats.name,
       };
       this.http.post(uri, obj)
           .subscribe(res => console.log('Done'));
     }*/
