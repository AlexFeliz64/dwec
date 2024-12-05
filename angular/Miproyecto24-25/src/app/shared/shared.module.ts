import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginadorComponent } from './components/paginador/paginador.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginadorComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PaginadorComponent
  ]
})
export class SharedModule { }
