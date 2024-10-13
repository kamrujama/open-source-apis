import { Component, OnInit, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiNamesData } from '../../models/data';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TextTruncarPipe } from '../../pipes/text-truncar.pipe';
import { CardComponent } from '../reusable/card/card.component';
import { LandingPageComponent } from '../main/landing-page/landing-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    TextTruncarPipe,
    CardComponent,
    LandingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  apiCards = ApiNamesData;
  currentRoute: string = ''
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(param => {
    //   if (!param['apiName']) {
    //     this.router.navigateByUrl('/');
    //   } else {
    //     switch (param['apiName']) {
    //       case '/json-formatter':{
    //         this.router.navigateByUrl('api/json-formatter')
    //         break;
    //       }
    //       default: this.router.navigateByUrl('/something-wrong');
    //     }
    //   }
    // })
  }
}
