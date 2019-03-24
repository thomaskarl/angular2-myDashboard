import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  private url = 'https://api.coinlore.com/api/tickers/?start=10&limit=10';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
  }

  getDogImage(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
        map(response => {
          return response.json();
        })
    );
  }
}
