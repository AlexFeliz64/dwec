import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/peliculas.interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL = environment.server;
const imgPeliculas = environment.rutaImgPeliculas;
// const limite = environment.registrosPorPagina;
// const pagina = environment.paginaInicial;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  pagina = 1;
  limite = 3;

  constructor(private http: HttpClient) { }


  /**
   * Devuelve el listado de peliculas
   * @returns ruta del listado
   */
  getPeliculas(): Observable<Pelicula[]>
  { 
    return this.http.get<Pelicula[]>(`${URL}/peliculas`);
  }
  
  getPeliculasPaginado(): Observable<Pelicula[]>
  { 
    return this.http.get<Pelicula[]>(`${URL}/peliculas?_page=${this.pagina}&_limit=${this.limite}`);
  }


  /**
   * Devuelve la peliculas del id indicado
   * @param id 
   * @returns ruta de la pelicula
   */
  getPeliculaId(id: string): Observable<Pelicula>{
    return this.http.get<Pelicula>(`${URL}/peliculas/${id}`)
  }

  /**
   * Coge la ruta de la variable para concatenarla con el ID
   * de la imagen y obtener la ruta completa
   * @param id 
   * @returns ruta de la imagen
   */
  getImgPelicula(id: string): string {
    return `${imgPeliculas}${id}.png`;
  }

  getBuscarPelicula(titulo: string): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${URL}/peliculas?titulo_like=${titulo}`);
  }

  getPaginadorAnterior(atras: number){

    this.pagina = this.pagina - atras;

    return this.http.get<Pelicula[]>(`${URL}/peliculas?_page=${this.pagina}&_limit=${this.limite}`);
  }

  getPaginadorSiguiente(adelante: number){

    this.pagina = this.pagina + adelante;

    return this.http.get<Pelicula[]>(`${URL}/peliculas?_page=${this.pagina}&_limit=${this.limite}`);
  }
}
