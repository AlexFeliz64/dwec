import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { RecetasService } from 'src/app/recetas/services/recetas.service';
import { ValidacionService } from 'src/app/shared/services/validacion.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionNombreService implements AsyncValidator{

  constructor(
    private validacionService   : ValidacionService,
    private recetasService       : RecetasService
  ) {
    // Registro de mensajes de error
    validacionService.registrarMensajeError("tituloDuplicado", "Ya existe una receta con este nombre");
  }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const nombre = control.value;

    // Tendré que usar un pipe que evalue y me retorne el objeto que necesito para generar validation errors
    // Utilizo el operador map para cambiar el objeto que recibo por el objeto con el error
    return this.recetasService.getPorNombre(nombre)
      .pipe(
        
        // Esta pausa me permite comprobar como cambia el estado del formulario de INVALID a PENDING a VALID
        //delay(5000),

        map( recetas => {
          return null;
          // Comprueba que no existe un nombre igual de la tabla en el campo
          // if(recetas.ok == 1 && recetas.datos[0]?.nombre == nombre) {
          //   return { nombreDuplicado: true }
          // } else {
          //   return null;
          // }            
        })  
      );
  
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
