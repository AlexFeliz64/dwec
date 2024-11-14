import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interfaces/recetas.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  receta! : Receta;

  constructor(
    
    // Ruta que ha sido activada para llegar aquí
    private activatedRoute    : ActivatedRoute,

    // Router
    private router            : Router,

    // Servicio de recetas
    private recetasService    : RecetasService

  ) {}

  ngOnInit(): void {
    this.cargarReceta();
  }

//-------------------------------------------------------------------------------------
// Funciones de persistencia. Permiten guardar y recuperar receta
//-------------------------------------------------------------------------------------

  /**
   * Cuando estamos editando, este método carga la receta que estamos editando en el formulario
   */
  cargarReceta() {
    // Si estamos en modo edición, obtiene los parámeros
    // y carga los datos
    this.activatedRoute.params
      
      // Usamos switchMap, que permite cambiar el id (el parámetro de entrada)
      // por la tarea
      .pipe(

          switchMap( ({id}) => this.recetasService.getPorId(id) ),
          
          // Este pipe muestra lo que viene
          tap(console.log)
      )
      // Finalmente, este subscribe recibe el resultado, que será el objeto
      .subscribe(receta => {
        this.receta = receta;        
      });
  }
}
