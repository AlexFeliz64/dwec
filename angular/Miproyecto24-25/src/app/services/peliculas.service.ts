import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/peliculas.interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL = environment.server;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }


  getPeliculas(): Observable<Pelicula[]>
  { 

    return this.http.get<Pelicula[]>(`${URL}/peliculas`);

    
  } 
}
