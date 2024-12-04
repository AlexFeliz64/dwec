import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html'
})
export class TarjetaPeliculaComponent{

  constructor
  (
    private peliculaservice: PeliculasService
  ) { }

  @Input () pelicula!:Pelicula

  /**
   * Da el ID para obtener el nombre de la imagen
   * @param peliculaId 
   * @returns ruta completa de la imagen
   */
  getImg(peliculaId: string): string {
    return this.peliculaservice.getImgPelicula(peliculaId);
  }

}
