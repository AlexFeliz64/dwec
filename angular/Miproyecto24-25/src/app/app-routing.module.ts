import { NgModule } from '@angular/core';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { MenuPeliculasComponent } from './pages/menuPeliculas/menuPeliculas.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes:Routes = [

  // Ruta para el menus con las peliculas
  {path:'menuPeliculas', component:MenuPeliculasComponent},
  
  // Ruta para el listado en tabla
  {path:'listado', component:ListadoComponent},
  
  
  // Ruta para el id de la pelicula
  {path:':id', component:PeliculaComponent},
  
  {path:'buscar/:titulo', component:BuscarComponent},

  // Ruta por defecto
  {path:'**', 
    redirectTo: '/menuPeliculas'
  },
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
