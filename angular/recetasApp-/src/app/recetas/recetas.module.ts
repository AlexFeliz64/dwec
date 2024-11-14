import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { VerComponent } from './pages/ver/ver.component';


@NgModule({
  declarations: [
    ListadoComponent,
    EditarComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule
  ],
  exports: [
    ListadoComponent,
    EditarComponent,
    VerComponent,
  ]
})
export class RecetasModule { }
