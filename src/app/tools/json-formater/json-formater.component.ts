import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-json-formater',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './json-formater.component.html',
  styleUrl: './json-formater.component.scss'
})
export class JsonFormaterComponent {

}
