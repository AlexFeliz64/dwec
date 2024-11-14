import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private URL_RECETAS = `${environment.recetasAppBaseUrl}/recetas`;

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Receta> {
    return this.httpClient.get<Receta>(this.URL_RECETAS);
  }
  post(receta : Receta): Observable<Receta> {
    return this.httpClient.post<Receta>(this.URL_RECETAS, receta);
  }

  borrar(receta: Receta)
  {
    console.log(receta.id);
    console.log(`${this.URL_RECETAS}/4`);
    return this.httpClient.delete(`${this.URL_RECETAS}/${receta.id}`);

  }

}
