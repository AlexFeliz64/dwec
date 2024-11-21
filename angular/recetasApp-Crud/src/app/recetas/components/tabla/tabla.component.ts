import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/recetas.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }

  @Input() recetas: Receta[] = [];

  // Eventos para las acciones de ver, editar y borrar
  @Output() verReceta = new EventEmitter<Receta>();
  @Output() editarReceta = new EventEmitter<Receta>();
  @Output() borrarReceta = new EventEmitter<Receta>();
}
