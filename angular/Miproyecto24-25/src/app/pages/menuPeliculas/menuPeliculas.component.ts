import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-menu-peliculas',
  templateUrl: './menuPeliculas.component.html'
})
export class MenuPeliculasComponent implements OnInit {

  peliculas:Pelicula[]=[];

  constructor
  (
    private peliculaservice: PeliculasService
  ) { }

  ngOnInit(): void {

    this.peliculaservice.getPeliculas()
    .pipe(
      tap(console.log)
    )
    
    .subscribe(peliculas => this.peliculas = peliculas);
  }

}
