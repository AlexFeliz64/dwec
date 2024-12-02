import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  /**
   * Le ponemos ! para indicar que la variable va a estar llena
   */
  pelicula!: Pelicula;

  constructor(
    private peliculaservice: PeliculasService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(){

    /**
     * Le pasamos el parametro ID a la ruta
     */
    this.activatedRouter.params.subscribe(({id}) => {
      /**
       * Obtiene la pelicula por el ID
       */
      this.peliculaservice.getPeliculaId(id).subscribe(respuesta=>{
        /**
         * Y la guarda el objeto en la varible respuesta
         */
        this.pelicula = respuesta;

        console.log(this.pelicula);

      })
    
    })

  }

  /**
   * Da el ID para obtener el nombre de la imagen
   * @param peliculaId 
   * @returns ruta completa de la imagen
   */
  getImg(peliculaId: string): string {
    return this.peliculaservice.getImgPelicula(peliculaId);
  }

}
