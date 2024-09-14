import { Component, Input, output } from '@angular/core';
import { Router } from '@angular/router';
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
    TextTruncarPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData: any;
  constructor(private router: Router) { }

  navigateTo(route: any): void {
    this.router.navigate(['/api', route]);
  }
}
