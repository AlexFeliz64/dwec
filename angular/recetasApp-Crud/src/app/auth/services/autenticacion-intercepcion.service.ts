import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionIntercepcionService {

  constructor(
    private autenticacionService: AutenticacionService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let peticion: HttpRequest<any>;

    const JwtToken = this.autenticacionService.getJwtToken();

    if(JwtToken == null){
      peticion = req;
    } else {

      peticion = req.clone({

        setHeaders:{
          Authorization: `Bearer ${JwtToken}`
        }
      });
    }

    return next.handle(peticion);

  }
}
