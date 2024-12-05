import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
})
export class PaginadorComponent {
  
  @Output() cambioPagina: EventEmitter<number> = new EventEmitter();
  pagina: number = 1;

  constructor() {}

  cambiarPaginaAnterior(): void {

    this.pagina = this.pagina - 1;

    if(this.pagina <= 1){
      this.pagina = 1
    }
    
    this.cambioPagina.emit(this.pagina);
  }
  cambiarPaginaSiguiente(): void {

    this.pagina = this.pagina + 1;
    
    this.cambioPagina.emit(this.pagina);
  }
}
