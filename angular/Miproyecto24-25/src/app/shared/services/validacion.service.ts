import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  /**
 * Valida que la duración sea un número mayor o igual a 1
 * 
 * @param control 
 * @returns 
 */
  validarDuracion(control: FormControl): ValidationErrors | null {
  const duracion = control.value;

  if (duracion < 1) {
    return { 
      duracionInvalida: true 
    };  
  }

  return null;  // Null = OK
}

/**
 * Valida que la la fecha sea en el pasado o presente
 * 
 * @param control 
 * @returns 
 */
  validarFecha(control: FormControl): ValidationErrors | null {
  
  // Obtiene el valor del control y lo convierte en una fecha
  const fechaIngresada = new Date(control.value);
  const fechaActual = new Date();

  if (fechaIngresada > fechaActual) {
    return {
      fechaFutura: true
    };
  }

  return null;
}

}
