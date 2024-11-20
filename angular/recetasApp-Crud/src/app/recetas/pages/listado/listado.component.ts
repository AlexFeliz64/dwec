import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interfaces/recetas.interface';
import { RecetasService } from '../../services/recetas.service';
import { tap } from 'rxjs/operators';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  
  recetas: Receta[] = [];

  //Pagina actual
  paginaActual = 0;

  constructor(
      // Necesitamos este objeto para hacer peticiones. 
      private recetasService: RecetasService,
      private dialogService: DialogService
  ) { }


  ngOnInit(): void {
    this.cargarRecetas(this.paginaActual);
  }


  private cargarRecetas(pagina: number) {
    
    // Carga la pagina actual de recetas
    

    // Cuando la pantalla se muestra se tienen que mostrar las tareas.
    this.recetasService.get(pagina)
     
      .pipe(

        // Este tap lo hago solo para mostrar los datos que pasan por aquí
        tap(console.log)
      )      
      .subscribe( recetas => {                 
          this.recetas = recetas;    
      });
  }

  /**
   * Bara borrar receta se pasa el índice dentro de la tabla de recetas.
   * Más que nada porque luego se evita tener que recorrer la tabla para hacer la eliminación
   * 
   * @param indice 
   */
  borrarReceta(receta: Receta): void {

    // Solicita confirmación para eliminar la receta
    this.dialogService.solicitarConfirmacion(
      "¿Está seguro de que desea eliminar el registro?", 
      "Atención", 
      () => {
      
        // Registra información acerca de la receta
        console.debug("borrarReceta");
        console.debug(receta);

        // Borra la receta
        this.recetasService.del(receta).subscribe(() => {
          console.log("Eliminada");

          // Fuerza que la kusta de recetas se refesque
          this.cargarRecetas(this.paginaActual);
        });
      }
    );
  }  

  //------------------------------------------
  // Eventos 
  //------------------------------------------

  cambiarPagina(pagina: number){
    this.paginaActual = pagina;
    this.cargarRecetas(pagina);
  }

}
