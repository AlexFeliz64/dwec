import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    ContadorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent,
    MenuComponent
  ]
})
export class SharedModule { }
