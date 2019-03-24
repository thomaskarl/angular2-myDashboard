import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private url = 'https://openwhyd.org/adrien?format=json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
  }

  getMusicList(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
        map(response => {
          return response.json();
        })
    );
  }
}
