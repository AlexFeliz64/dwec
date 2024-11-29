import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';

const routes:Routes = [

  {path:'peliculas', component:PeliculaComponent},
  {path:'listado', component:ListadoComponent},
  {path:'pelicula/:id', component:PeliculaComponent},
  {path:'buscar/:texto', component:PeliculaComponent},


  {path:'**', 
    redirectTo: '/peliculas'
  },

  {path:'', 
    redirectTo: '/peliculas'
  },
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
