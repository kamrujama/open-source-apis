import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {

  private cardSelectedSource = new BehaviorSubject<boolean>(false);
  cardSelected$ = this.cardSelectedSource.asObservable();

  setCardSelected(selected: boolean): void {
    this.cardSelectedSource.next(selected);
  }

  getShortUrl(url: string): Observable<any> {
    // Convert fetch promise to an Observable using 'from'
    return from(
      fetch(url, { mode: 'cors' })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Assuming the response is JSON
          }
          throw new Error('Network response was not ok');
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          return of(null); // Return a fallback value in case of an error
        })
    );
  }

  
}