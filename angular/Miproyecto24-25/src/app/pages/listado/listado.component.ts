import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importaciones necesarias
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  peliculas: Pelicula[] = [];
  peliculaEdicion: Pelicula | null = null;
  mostrarModal: boolean = false;

  pagina: number = 1;
  limite = 3;
  adelante = 0;
  atras = 0;


  constructor(
    private peliculaservice: PeliculasService,
  ) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.peliculaservice.getPeliculasPaginado(this.pagina, this.limite).subscribe((respuesta) => {
      this.peliculas = respuesta;
      console.log(this.peliculas);
    });
  }

  /**
   * Salta un mensaje para confirmar borrado y borra
   * @param id 
   */
  eliminarPelicula(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta película?')) {
      this.peliculaservice.eliminarPelicula(id).subscribe({
        next: () => {
          this.cargarPeliculas();
        },
        error: (error) => {
          console.error('Error al eliminar la película:', error);
        }
      });
    }
  }
  

  cambiarPagina(pagina: number): void {
    this.pagina = pagina;
    this.cargarPeliculas();
  }


  abrirModal(pelicula: Pelicula): void {
    this.peliculaEdicion = pelicula;
    this.mostrarModal = true;  
  }

  abrirModalCrear(){
    this.peliculaEdicion = null;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;  
    this.peliculaEdicion = null;  
  }

  getImg(peliculaId: string): string {
    return this.peliculaservice.getImgPelicula(peliculaId);
  }
  
}
