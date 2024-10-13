import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

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
      fetch(url).then((response)=>{
         return of(response);
      }).catch(()=>{
        
      })
    return of(null)
  }

  
}