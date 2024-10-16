import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApiCardsComponent } from './api-cards/api-cards.component';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ApiCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'open-source-frontend';
  cardSelected: any;

  constructor(private eventService: EventService, private router: Router){}

  ngOnInit(): void {
      this.eventService.cardSelected$.subscribe(selected=>{
        console.log('Selected:', selected);
        this.cardSelected = selected})
  }
}
