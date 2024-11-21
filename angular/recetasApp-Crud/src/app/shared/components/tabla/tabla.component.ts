import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/recetas.interface';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

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
