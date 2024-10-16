import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EventService {
    private cardSelectedSource = new BehaviorSubject<boolean>(false);
    cardSelected$ = this.cardSelectedSource.asObservable();
  
    setCardSelected(selected: boolean): void {
      this.cardSelectedSource.next(selected);
    }}