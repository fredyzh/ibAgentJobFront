import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl: string = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.production
      ? environment.apiProdUrl + environment.appJobUrl
      : environment.apiDevUrl + environment.appJobUrl;
  }

  public postJobRequest(ibRequestJson:string): Observable<any>  {
    return this.http
      .post(this.apiUrl, ibRequestJson, {
        headers: { 'Content-Type': 'application/json' },
      });
      // .subscribe(
      //   (response) => {
      //     console.log('Response from backend:', response);
      //   },
      //   (error) => {
      //     console.error('Error:', error);
      //   }
      // );
  }
}

export const environment = {
  production: false,
  apiProdUrl: 'http://host.docker.internal:9292/',
  apiDevUrl: 'http://localhost:9292/',
  appJobUrl: 'ibJobs/startHistoricalJob',
};


