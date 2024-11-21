import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private URL_LOGIN = `${environment.recetasBackendUrl}/login`;

  private jwtToken : string | null = null;
  constructor(
    private httpCliente: HttpClient
  ) 
  
  { }

  inicialSesion(login: string, pass: string) : Observable<boolean>{
    this.jwtToken = 'Sesion iniciada'
    return of(true);
  }


  // Retorna true si la sesion esta iniciada
  isSesionIniciada() : Observable<boolean>{
    return of(this.jwtToken != null ? true : false);
  }

  getJwtToken(): string | null{
    return this.jwtToken;
  }
}
