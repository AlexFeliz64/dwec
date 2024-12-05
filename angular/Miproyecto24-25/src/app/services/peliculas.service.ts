import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/peliculas.interfaces';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

const URL = environment.server;
const imgPeliculas = environment.rutaImgPeliculas;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  pagina: number = 1;
  limite = 3;

  constructor(private http: HttpClient) { }

  /**
   * Devuelve el listado de peliculas
   * @returns ruta del listado
   */
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${URL}/peliculas`);
  }

  /**
   * Devuelve la pelicula con el id indicado
   * @param id 
   * @returns ruta de la pelicula
   */
  getPeliculaId(id: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${URL}/peliculas/${id}`);
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

  /**
   * Buscar películas por título
   * @param titulo 
   * @returns películas que coinciden con el título
   */
  getBuscarPelicula(titulo: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${URL}/peliculas?titulo_like=${titulo}`);
  }

  getPeliculasPaginado(pagina: number, limite: number): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${URL}/peliculas?_page=${pagina}&_limit=${limite}`);
  }

  /**
   * Paginación anterior
   * @param atras 
   * @returns listado de películas
   */
  getPaginadorAnterior(atras: number): Observable<Pelicula[]> {
    if (this.pagina === 1) {
      this.pagina = 1;
    } else {
      this.pagina = this.pagina - atras;
    }
    return this.getPeliculasPaginado(this.pagina, this.limite);
  }

  /**
   * Paginación siguiente
   * @param adelante 
   * @returns listado de películas
   */
  getPaginadorSiguiente(adelante: number): Observable<Pelicula[]> {
    const nuevaPagina = this.pagina + adelante;
  
    return this.getPeliculasPaginado(nuevaPagina, this.limite)
    .pipe(
      map((peliculas: Pelicula[]) => {
        if (peliculas.length > 0) {
          this.pagina = nuevaPagina; 
          return peliculas;
        } else {
          alert('Ya no hay más páginas disponibles.');
          throw new Error('No hay más datos disponibles.');
        }
      })
    );
  }

  /**
   * Agregar una nueva película
   * @param pelicula 
   * @returns la película agregada
   */
  agregarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(`${URL}/peliculas`, pelicula);
  }

  /**
   * Editar una película existente
   * @param id 
   * @param pelicula 
   * @returns la película editada
   */
  editarPelicula(id: string, pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${URL}/peliculas/${id}`, pelicula);
  }
}
