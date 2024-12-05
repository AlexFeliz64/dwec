import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-menu-peliculas',
  templateUrl: './menuPeliculas.component.html'
})
export class MenuPeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaservice: PeliculasService) {}

  ngOnInit(): void {
    this.peliculaservice.getPeliculas()
      .pipe(tap(console.log))
      .subscribe(peliculas => this.peliculas = peliculas);
  }

   /**
   * Ordena las películas por el título de manera alfabética (A-Z).
   */
   ordenarAZ(): void {
    this.peliculas.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  /**
   * Ordena las películas por el título de manera descendente (Z-A).
   */
  ordenarZA(): void {
    this.peliculas.sort((a, b) => b.titulo.localeCompare(a.titulo));
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
