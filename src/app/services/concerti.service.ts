import { Concerto } from './../model/concerto';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConcertiService {

  // private url = './assets/serverServices/concerti.php';
  private url = 'http://localhost/Mach5/src/assets/serverServices/concerti.php';

  constructor(public httpService: Http) {
    console.log('ConcertiService is connected...');
  }

  getConcerti(): Observable<Concerto[]> {
    return this.httpService.get(this.url)
      .map(response => response.json() as Concerto[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
