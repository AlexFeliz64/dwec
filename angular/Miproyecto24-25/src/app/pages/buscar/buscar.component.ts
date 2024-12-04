import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  peliculas: Pelicula[]=[];

  constructor(
    private peliculaservice: PeliculasService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(param=>{

      this.peliculaservice.getBuscarPelicula(param['titulo']).subscribe(respuesta=>{

        this.peliculas = respuesta;

        console.log(this.peliculas);

      })

    });

  }

}
