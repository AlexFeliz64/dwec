import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse } from '../interfaces/autenticacion';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private URL_LOGIN = `${environment.recetasBackendUrl}/login`;

  private jwtToken: string | null = null;

  constructor(private httpCliente: HttpClient) {}

  inicialSesion(login: string, pass: string): Observable<boolean> {
    const credenciales: LoginRequest = {
      email: login,
      password: pass,
      accessToken: null
    };

    return this.httpCliente.post<LoginResponse>(this.URL_LOGIN, credenciales).pipe(
      map((response) => {
        this.jwtToken = response.accessToken;
        return true;
      })
    );
  }

  // Retorna true si la sesión está iniciada
  isSesionIniciada(): Observable<boolean> {
    return of(this.jwtToken != null);
  }

  getJwtToken(): string | null {
    return this.jwtToken;
  }
}
