import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { EventService } from './services/event.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'open-source-frontend';
  cardSelected: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.cardSelected$.subscribe(selected => {
      console.log('Selected:', selected);
      this.cardSelected = selected
    })
  }
}
