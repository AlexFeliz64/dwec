import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    // No es necesario especificar nada en este atributo
    // Ya que estamos definiendo rutas hijas.
    path: '',
    children: [
      {
        // tareas/listado
        path: 'login',
        component: LoginComponent
      },
      {
        // tareas/agregar
        path: '**',
        redirectTo: 'login'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
