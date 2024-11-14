import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';
import { RecetasService } from '../../services/recetas.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[
    '#box{ border: 1px solid black; margin: 25px; padding: 5px 30px }',
    'div > p{ margin: 0}'
  ]
})
export class ListadoComponent implements OnInit {

  recetas: Receta[] = [];

  constructor(

    private recetasService: RecetasService
  ) { }

  ngOnInit(): void {
    this.getRecetas();
  }


  private getRecetas()
  {
    this.recetasService.get()
     
      .pipe(

        tap(console.log)
      )
      
      .subscribe( receta => {
          this.recetas = receta;    
      });
  }

  borrarReceta(receta: Receta): void
  {
    this.recetasService.borrar(receta);
  }

}
