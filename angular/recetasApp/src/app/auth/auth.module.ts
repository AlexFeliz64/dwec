import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [

    // Este módulo ofrece algunas funcionalidades para trabajar con plantillas HTML
    CommonModule,

    // Aquí se define el enrutamiento de este módulo
    AuthRoutingModule,

    // Módulo Shared
    SharedModule
  ]
})
export class AuthModule { }
