import { Component, Input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TextTruncarPipe } from '../../../pipes/text-truncar.pipe';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    TextTruncarPipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData: any;
  isClicked = false;
  constructor(private router: Router) { }

  navigateTo(route: any): void {
    this.router.navigate(['/apiDetails', route]);
  }
}
