import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recetasApp';
  numero: number = 0; 
  sumar(v : number) {
    this.numero++;
  }
  restar(v: number) {
    this.numero--;
  }          
}
