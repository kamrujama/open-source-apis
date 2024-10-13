import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss'
})
export class JsonFormatterComponent {
  jsonInput: string ='';
  jsonOutput: string = '';
  invalidJson: boolean = false;
  constructor(private sanitizer: DomSanitizer) {
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  formatJson():void{
    try {
      const parsedJson = JSON.parse(this.jsonInput);
      this.jsonOutput = JSON.stringify(parsedJson, null, 4);
      this.invalidJson = false;
    } catch (e) {
      this.invalidJson = true;
      this.jsonOutput = 'Invalid JSON';
    }
  }

  minifyJson():void {
    try {
      const parsedJson = JSON.parse(this.jsonInput);
      this.jsonOutput = JSON.stringify(parsedJson);
      this.invalidJson = false;
    } catch (e) {
      this.formatJson
      this.jsonOutput = 'Invalid JSON';
    }
  }

  clearInput():void {
    this.jsonInput = '';
    this.jsonOutput = '';
  }

}
