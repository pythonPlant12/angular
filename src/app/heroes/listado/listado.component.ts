import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Wonder Woman', 'Thor', 'Wonder Woman II', 'Uno mas'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }
}
