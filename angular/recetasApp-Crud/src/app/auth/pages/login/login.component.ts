import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {



  // Credenciales en la página
  credenciales = {

    login: "",
    pass: ""

  }

  errorInicioSesion: boolean = false;

  constructor(
    private router: Router,
    private autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticacionService.inicialSesion(this.credenciales.login, this.credenciales.pass)
    .subscribe({
      
      next:(autenticado: boolean) => {

        this.router.navigate(['/dashboard']);

      },

      complete:() => {
          
      },

      error:(error: any) => {
          this.errorInicioSesion = true
      },

    });
  }
}
