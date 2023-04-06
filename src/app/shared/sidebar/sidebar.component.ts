import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}
  nombreBuscado: string = "";

  get historial() {
    return this.gifsService.historial
    // return this.gifsService
  }
  buscar(termino:string): void{
    this.gifsService.buscarGifs(termino);

  }

}
