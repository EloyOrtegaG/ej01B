import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})

export class PersonaDetailComponent {
  @Input() persona?: Persona;  
}
