import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defino las rutas raíz. Estoy utilizando carga perezosa de acuerdo con
// la documentación de Angular
// https://angular.io/guide/lazy-loading-ngmodules
//
// Es un array de objetos de tipo Route. Tienes más información sobre
// dicho objeto aquí.
// https://angular.io/api/router/Route
const routes: Routes = [

  {    
    // Módulo de autenticación
    path: 'auth',
    // La ruta que indico es la ruta del módulo a importar
    // la función flecha siempre va a ser así. 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),    
  },


  {
    // Gestión de tareas.
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

  imports: [

    // Esto importa las rutas configuradas. Es importante incluir este
    // import para configurar el enrutamiento
    RouterModule.forRoot(routes)
  ],
  
  // Al exportar esto aquí, cuando importe este módulo se importarán
  // también las rutas.
  exports: [RouterModule]
})
export class AppRoutingModule { }