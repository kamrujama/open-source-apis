import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss'
})
export class JsonFormatterComponent {
  jsonUrl: SafeResourceUrl; 
  constructor(private sanitizer: DomSanitizer) {
    this.jsonUrl = this.sanitizeUrl("https://jsonformatter.org/");

  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
