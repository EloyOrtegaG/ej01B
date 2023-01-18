import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../mock-personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  //persona = 'John Doe';
  persona : Persona = {
    id: 1,
    name: 'Eloy',
    surname: 'Ortega',
    phone: 646464,
    email: 'eortega@deustoseidor.com'
  }
  personas = PERSONAS
}
