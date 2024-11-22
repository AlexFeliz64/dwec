import { Component } from '@angular/core';
import { AutenticacionService } from './auth/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'recetasApp';
  sesionIniciada = false;

  constructor(
    private router: Router,
    private autenticacionService: AutenticacionService
  ){

  }             

  isSesionIniciada(){
    return this.autenticacionService.isSesionIniciada(true);
  }

  cerrarSesion(){
    this.autenticacionService.cerrarSesion();

    this.router.navigate(['auth/login'])
  }
}
