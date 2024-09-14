import { Component } from '@angular/core';
import { environment } from '../../../../environment';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  APP_VERSION = environment.version;
}
