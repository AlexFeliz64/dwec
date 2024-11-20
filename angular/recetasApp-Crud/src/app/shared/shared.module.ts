import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorComponent } from './components/contador/contador.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PaginadorComponent } from './components/paginador/paginador.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent,
    PaginadorComponent
  ],
  imports: [
    CommonModule,    
    RouterModule
  ],
  exports: [
    ContadorComponent,
    MenuComponent,
    PaginadorComponent
  ]
})
export class SharedModule { }
