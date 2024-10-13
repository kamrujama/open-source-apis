import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-regex-tester',
  standalone: true,
  imports: [],
  templateUrl: './regex-tester.component.html',
  styleUrl: './regex-tester.component.scss'
})
export class RegexTesterComponent {

  regex: SafeResourceUrl; 
  constructor(private sanitizer: DomSanitizer) {
    this.regex = this.sanitizeUrl("https://free-url-shortener.rb.gy/");
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
