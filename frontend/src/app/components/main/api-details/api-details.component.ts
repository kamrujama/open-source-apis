import { Component, ElementRef, ViewChild, platformCore, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApiNamesData } from '../../../models/data';
@Component({
  selector: 'app-api-details',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.scss'
})
export class ApiDetailsComponent {
   @ViewChild('apiDetailsRef') apiDetailsRef: ElementRef = new ElementRef<any>(null);
   @ViewChild('expandCollapse') expandCollapseRef!: ElementRef;
  cardMenuData = ApiNamesData;
  currentRoute = '';
  isMenuCollapse = false;
  constructor (private route: ActivatedRoute, private router: Router) {
    // this.apiDetailsRef = new HTMLElement();
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    // this.apiDetailsRef.nativeElement.scrollTo(0);
    this.route.params.subscribe(param => {
      this.currentRoute = param['apiName'];
    })
  }

  changeSelectedMenu(currentRouteName:string) {
    this.currentRoute = currentRouteName;
  }

  toggleMenuCollapse():void {
    this.isMenuCollapse = !this.isMenuCollapse;
    if (this.isMenuCollapse){
      this.expandCollapseRef.nativeElement.style.transform = 'rotate(0deg)';
    } else {
      this.expandCollapseRef.nativeElement.style.transform = 'rotate(180deg)';
    }
  }

}
