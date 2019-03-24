import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=3';


  constructor(private http: Http) {
  }

  getThreeCards(): Observable<any> {
    return this.http.get(this.url).pipe(
        map(response => {
          return response.json();
        })
    );
  }
}
