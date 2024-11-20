import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../interfaces/recetas.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private URL_RECETAS = `${environment.recetasBackendUrl}/recetas`;

  constructor(
      // Necesitamos este objeto para hacer peticiones. 
      private httpClient: HttpClient
  ) { }

  /**
   * Obtiene la lista de recetas
   */ 
  get(pagina: number=environment.paginaInicial): Observable<Receta> {

    let url: string;
    
    if(pagina > 0){
      url = `${this.URL_RECETAS}?_page=${pagina}&_limit=3`;
    } else {
      url = this.URL_RECETAS;
    }
    // Retorna un observable
    return this.httpClient.get<Receta>(url);
  }

  /**
   * Obtiene la lista de recetas
   */ 
  getPorId(id : string): Observable<Receta> {
    
    // Retorna un observable
    return this.httpClient.get<Receta>(`${this.URL_RECETAS}/${id}`);
  }

  getPorNombre(nombre : string): Observable<Receta> {
    
    // Retorna un observable
    return this.httpClient.get<Receta>(`${this.URL_RECETAS}?nombre=${nombre}`);
  }

  /**
   * Borra una tarea pasada la tarea
   */
  del(receta : Receta): Observable<Receta> {    
    
    // Llama a eliminar la tarea
    const url_receta = `${this.URL_RECETAS}/${receta.id}`;
    
    // Invoca a eliminar el registro
    return this.httpClient.delete<Receta>(url_receta);
  }

  /**
   * Actualiza una receta
   */
  put(receta : Receta) : Observable<Receta> {

    // URL del recurso a actualizar
    const url = `${this.URL_RECETAS}/${receta.id}`;

    return this.httpClient.put<Receta>(url, receta);
  }

  /**
   * Actualiza una receta
   */
  post(receta : Receta) : Observable<Receta> {

    // Nos aseguramos de que el contacto no tiene atributo ID
    delete receta.id;    

    return this.httpClient.post<Receta>(this.URL_RECETAS, receta);
  }

}
