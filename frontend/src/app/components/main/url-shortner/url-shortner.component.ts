import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../../services/event.service';
@Component({
  selector: 'app-url-shortner',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './url-shortner.component.html', 
  styleUrl: './url-shortner.component.scss'
})
export class UrlShortnerComponent implements OnInit{

  longUrl: string = 'https://ulvis.net/api.php?url=&custom=YOUR-CUSTOM-NAME&private=1';
  customAlias: string = '';
  expiration: string = 'never';
  enableAnalytics: boolean = false;
  shortenedUrl: string = '';
  reactiveForm!: FormGroup;
  eventService = inject(EventService)

  constructor(){}

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      longUrl : new FormControl('', Validators.required),
      customAlias: new FormControl(null),
      expiration: new FormControl('1d'),
      analytics: new FormControl(null)
    })
  }
  shortenUrl(): void{
  const longUrl = this.reactiveForm.get('longUrl')!.value;
  const customAlias = this.reactiveForm.get('customAlias')!.value || '';
   this.longUrl = `https://ulvis.net/api.php?url=${longUrl}&custom=${customAlias}&private=1` 
   this.eventService.getShortUrl(this.longUrl).subscribe((response)=>{
     this.shortenUrl = response
   },(error)=>{

   })
  }

  private generateRandomAlias(): string {
    return Math.random().toString(36).substring(2, 8);
  }

}
