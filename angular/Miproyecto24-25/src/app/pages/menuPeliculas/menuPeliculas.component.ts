import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-menu-peliculas',
  templateUrl: './menuPeliculas.component.html',
  styleUrls: ['./menuPeliculas.component.css']
})
export class MenuPeliculasComponent implements OnInit {

  peliculas:Pelicula[]=[];

  constructor
  (
    private peliculaservice: PeliculasService
  ) { }

  ngOnInit(): void {

    this.peliculaservice.getPeliculas().subscribe(peliculas = console.log(peliculas));
  }

}
