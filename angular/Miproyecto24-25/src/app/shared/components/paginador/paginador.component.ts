import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
})
export class PaginadorComponent {
  @Output() cambioPagina: EventEmitter<number> = new EventEmitter();
  pagina: number = 1;

  constructor() {}

  cambiarPagina(direccion: number): void {
    this.pagina += direccion;
    this.cambioPagina.emit(this.pagina);
  }
}
