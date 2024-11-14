import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*
  {    
    // Módulo de autenticación
    path: 'auth',
    // La ruta que indico es la ruta del módulo a importar
    // la función flecha siempre va a ser así. 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),    
  },
*/
  {
    // Cuadro de mandos
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),    
  },

  {
    // Gestión de recetas.
    path: 'recetas',
    loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule),    
  },

  {
    // La ruta por defecto. Va a entrar aquí si solicitamos
    // una ruta no definida.
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
