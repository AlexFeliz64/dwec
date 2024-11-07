import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [

    // Este módulo ofrece algunas funcionalidades para trabajar con plantillas HTML
    CommonModule,
    
    // Aquí se define el enrutamiento de este módulo
    RecetasRoutingModule,
    
    // Módulo Shared
    SharedModule
  ]
})
export class RecetasModule { }
