import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegetta',
          poder: 7500
        }
      ];
    // Como la propiedad _personajes es privada, utilizamos getter para sacar la lista
      get personajes(): Personaje[] {
        // Javascript funciona por referencias, para romper la relación con personajes se agrega [...]
        return [...this._personajes];
      }

    constructor() {
        console.log("Servicio inicializado");
    }

    agregarPersonajes(personaje: Personaje) {
      this._personajes.push(personaje);
    }
}