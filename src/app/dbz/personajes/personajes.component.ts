import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  @Input('personajesList') personajes: Personaje[] = []; // @Input dice que este elemento va a venir del componente padre
}
