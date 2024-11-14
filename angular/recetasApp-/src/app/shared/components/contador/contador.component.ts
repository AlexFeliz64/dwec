import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
})
export class ContadorComponent {
    titulo: string = 'Contador TS';
    numero: number = 10;
    base: number = 5;
  
    sumar(base: number) {
      this.numero += base;
    }
  
    restar(base: number) {
      this.numero -= base;
    }  
}
