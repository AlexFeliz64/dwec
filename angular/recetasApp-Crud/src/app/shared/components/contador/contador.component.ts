import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent implements OnInit {

  titulo: string = 'Contador TS';
  numero: number = 10;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(base: number) {
    this.numero += base;
  }

  restar(base: number) {
    this.numero -= base;
  }    

}
