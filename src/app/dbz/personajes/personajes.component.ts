import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input('personajesList') personajes: Personaje[] = []; // @Input dice que este elemento va a venir del componente padre
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) { }
}


