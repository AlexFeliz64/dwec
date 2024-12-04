import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  peliculas: Pelicula[]=[];

  adelante = 0;
  atras = 0;
  
  constructor(
    private peliculaservice: PeliculasService,
  ) { }

  ngOnInit(): void {

    this.peliculaservice.getPeliculasPaginado().subscribe(respuesta=>{

      this.peliculas=respuesta;
      console.log(this.peliculas);

    })

  }

  paginarAnterior(){

    this.atras = 1;

    this.peliculaservice.getPaginadorAnterior(this.atras).subscribe(respuesta=>{

        this.peliculas=respuesta;
        console.log('Atras',this.peliculas);
    })

  }

  paginarSiguiente(){

    this.adelante = 1;

    this.peliculaservice.getPaginadorSiguiente(this.adelante).subscribe(respuesta=>{

      this.peliculas=respuesta;
      console.log('Adelante',this.peliculas);

    })

  }

}
