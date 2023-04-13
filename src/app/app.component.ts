import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre del componente (Se puede comprobar en html es el mismo nombre)
  templateUrl: './app.component.html', // Directorio del componente
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nombre: string = 'Nikita lutSai';
  valor: number = 1000;
  obj = {
    nombre: 'Nikita'
  }

  cambiarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}