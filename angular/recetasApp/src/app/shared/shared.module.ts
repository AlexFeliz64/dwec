import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent
  ]
})
export class SharedModule { }
