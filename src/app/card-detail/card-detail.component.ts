import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { JsonFormaterComponent } from '../tools/json-formater/json-formater.component';


@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [MatIconModule, JsonFormaterComponent],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent {

  constructor(private router: Router, private eventService: EventService){}
  closeCard() {
    this.eventService.setCardSelected(false);
    this.router.navigate(['/'])
  }
}
