import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html'
})
export class PaginadorComponent implements OnInit {


  /** 
   * 
  */
  @Input() paginaActual: number=0;

  @Output() onPaginaCambiada: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  paginaAnterior(){
    if(this.paginaActual>0){
      this.paginaActual--;
      this.onPaginaCambiada.emit(this.paginaActual);
    }
  }

  paginaSiguiente(){
    this.paginaActual++;
    this.onPaginaCambiada.emit(this.paginaActual);
  }

}
