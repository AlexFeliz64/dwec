import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';

const routes: Routes = [{

  path: '',
    children: [
      {
        // tareas/listado
        path: 'listado',
        component: ListadoComponent
      },
      {
        // tareas/agregar
        path: 'agregar',
        component: EditarComponent
      },
      {
        // editar/XXXX donde XXXX es el id de tarea
        // Desde el componente se puede capturar ese ID
        path: 'editar/:id',
        component: EditarComponent
      },
      {
        // Hace match para /XXXX donde XXXX es el id de tarea
        // desde el componente se captura y se puede mostrar
        // la tarea
        path: ':id',
        component: VerComponent
      },
      {
        // Por defecto, envía al listado.
        path: '**',
        redirectTo: 'listado'
      }
    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
