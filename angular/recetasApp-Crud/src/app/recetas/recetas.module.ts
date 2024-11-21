
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecetasRoutingModule } from './recetas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { VerComponent } from './pages/ver/ver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    ListadoComponent,
    EditarComponent,
    VerComponent,
    TablaComponent
  ],
  imports: [
    
    // Este módulo ofrece algunas funcionalidades para trabajar con plantillas HTML
    CommonModule,
    
    // Formularios reactivos
    ReactiveFormsModule,

    // Aquí se define el enrutamiento de este módulo
    RecetasRoutingModule,

    // Módulo Shared
    SharedModule
  ]
})
export class RecetasModule { }
