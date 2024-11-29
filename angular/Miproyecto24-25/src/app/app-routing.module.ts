import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { MenuPeliculasComponent } from './pages/menuPeliculas/menuPeliculas.component';

const routes:Routes = [

  {path: '', redirectTo: '/peliculas', pathMatch: 'full'},

  {path:'menuPeliculas', component:MenuPeliculasComponent},
  {path:'listado', component:ListadoComponent},
  {path:'pelicula/:id', component:PeliculaComponent},
  {path:'buscar/:texto', component:PeliculaComponent},


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
