import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  // Definición de los errores que se pueden emitir cuando se validan campos independientes
  private mensajesError : any = {
    noEmpiezaMayuscula: "El valor debe comenzar por mayúscula",
    MaximoCaracteres: "Los caracteres superan el limite",
    required: "Campo requerido"
  }

  //---------------------------------------------------------------
  // Funciones para obtener el texto de los errores
  //---------------------------------------------------------------
  getMensajeError(error: string): string {
    return this.mensajesError[error];
  } 

  // Permite a otras clases de validación añadir sus mensajes aquí
  registrarMensajeError(clave: string, valor: string) {
    this.mensajesError[clave] = valor;
  }

  constructor() { }

  validarEmpiezaMayuscula(control: FormControl) : ValidationErrors | null {
      
    // Obtiene el valor en el control
    const inicial :string = control.value?.trim()[0];     
 
    // Si el valor no pasa la validación, tenemos problemas
    if(inicial && inicial != inicial.toUpperCase()) {
      
      // Rengo que devolver un objeto con el error
      return {
        // El atributo indica la validación que no se ha pasado
        // Los campos tendrán estos errores por lo que se puede mostrar un mensaje
        noEmpiezaMayuscula: true
      }  
    }

    // Null implica que todo OK. Nada que notificar
    return null;
  }

  validarMaximoCaracteres(control: FormControl) : ValidationErrors | null {
      
    // Obtiene el valor en el control
    const caracteres: string = control.value?.trim() || '';    
 
    // Si el valor no pasa la validación, tenemos problemas
    if(caracteres && caracteres.length > 5) {
      
      // Rengo que devolver un objeto con el error
      return {
        // El atributo indica la validación que no se ha pasado
        // Los campos tendrán estos errores por lo que se puede mostrar un mensaje
        MaximoCaracteres: true
      }  
    }

    // Null implica que todo OK. Nada que notificar
    return null;
  }
}
