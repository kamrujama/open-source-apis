import { Component, output } from '@angular/core';
import { Router } from '@angular/router';
import EventEmitter from 'node:events';
import { EventService } from '../services/event.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TextTruncarPipe } from '../pipes/text-truncar.pipe';

@Component({
  selector: 'app-api-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule, TextTruncarPipe],
  templateUrl: './api-cards.component.html',
  styleUrl: './api-cards.component.scss'
})
export class ApiCardsComponent {
   selectedCard = output<any>()

     apiCards = [
    {
      name: 'JSON Formatter',
      description: 'Easily format, beautify, and validate JSON strings to make them more readable and error-free. This tool also helps in identifying any syntax errors in your JSON.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'URL Shortener',
      description: 'Generate shorter URLs for long links to make sharing more convenient. You can also track clicks and set expiration dates for the shortened URLs.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'Regex Tester',
      description: 'Test and validate your regular expressions with real-time feedback. Quickly visualize pattern matches and understand how the regex behaves.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'Password Generator',
      description: 'Create secure and random passwords of any length and complexity. Customize your passwords with options for special characters, numbers, and more.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'File Converter',
      description: 'Convert files between different formats like CSV, Excel, JSON, and more with ease. A perfect tool for transforming your data without needing additional software.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'REST API Client',
      description: 'Send HTTP requests to any REST API and receive formatted responses. Supports common methods like GET, POST, PUT, and DELETE, making API testing quick and efficient.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'String Manipulation Tools',
      description: 'Perform common string operations such as trimming, splitting, case conversion, and more. Simplify complex string tasks with this set of tools.',
      icon: '../../assets/images/json.jpg'
    },
    {
      name: 'Base64 Encoder/Decoder',
      description: 'Convert text or files to Base64 format and decode Base64 strings back into readable text. Useful for handling binary data in APIs and web applications.',
      icon: '../../assets/images/json.jpg'
    }
  ];

  public cardSelected$ = this.eventService.cardSelected$;

  constructor(private router: Router, private eventService: EventService) {}
  
  cardClick(cardDetails: any):void {
    this.router.navigate(['/cardDetail', cardDetails.name])
    this.eventService.setCardSelected(true);
  }  
}
