import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetasService } from '../../services/recetas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { switchMap, tap } from 'rxjs';
import { Receta } from '../../interfaces/recetas.interface';
import { ValidacionService } from 'src/app/shared/services/validacion.service';
import { ValidacionNombreService } from 'src/app/tasks/validators/validacion-titulo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {
    
  // Defino el formulario
  // En esta definición incluyo
  // - Nombres de los campos. Deben coincidir con los del objeto
  // - Opciones de los campos
  // - Validaciones locales
  // - Validaciones asíncronas
  formulario: FormGroup = this.fb.group({
    id          : [-1],

    nombre            : [ '', 
                          [ Validators.required, 
                            this.validacionservice.validarEmpiezaMayuscula,
                           ],
                          [ ]
                        ],

    descripcion       : ['', 
                          [ Validators.required,
                            this.validacionservice.validarMaximoCaracteres,
                            this.validacionnombreservice
                          ] ],

  }, {  
    // 008 Este segundo argumento que puedo enviar al formgroup permite por ejemplo ejecutar
    // validadores sincronos y asíncronos. Son validaciones al formgroup
    validators: [  ]
  });

  // Indica si la tarea se está actualizando
  actualizando: boolean = false;

  //-------------------------------------------------------------------------------------
  // Inicialización
  //-------------------------------------------------------------------------------------
  constructor(
      private activatedRoute    : ActivatedRoute,
      private fb                : FormBuilder,
      private router            : Router,

      private dialogService     : DialogService,
      
      private recetasService    : RecetasService,
      private validacionservice : ValidacionService,
      private validacionnombreservice : ValidacionNombreService,

  ) { }


  ngOnInit(): void {
  
    // Si no estamos en modo edición, sale de aquí
    if(this.router.url.includes('editar')) {    
      this.cargarReceta();
      this.actualizando = true;
    }
  }

  //-------------------------------------------------------------------------------------
  // Funciones generales del formulario
  //-------------------------------------------------------------------------------------

  /**
   * Guarda los cambios y vuelve a la pantalla anterior. 
   */
  guardar() {

    // Si el formulario no es válido, muestra un mensaje de error y termina
    if(this.formulario.invalid) {
      
      // Marco los campos como tocados. De ese modo se mostrarán todos los errores
      // registrados en los campos
      this.formulario.markAllAsTouched();

      // Muestro mensaje de error
      this.dialogService.mostrarMensaje('Por favor, revise los datos');

      // Finaliza
      return;
    }

    // Si id_tarea es > 0 significa que la tarea ya existía. Es actualización
    if(this.formulario.get('id')?.value > 0) {

      // Actualiza la contacto
      this.actualizarReceta();

    } else {

      // Crea el contacto
      this.crearReceta();
    }
  } 


  /**
   * Comprueba si un campo es válido
   * 
   * @param campo 
   * @returns 
   */
  esCampoNoValido(campo : string) : boolean | undefined {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }  


  /**
   * Devuelce el mensaje de error asociado a un campo
   * 
   * @param campo 
   * @returns 
   */
  mensajeErrorCampo(campo : string) : string {
    const errors = this.formulario.get(campo)?.errors;
    let mensajeError = '';
    
    if(errors) {
      for(let e in errors) {

        // Obtiene el mensaje
        const mensaje = this.validacionservice.getMensajeError(e);
        mensajeError = mensajeError + mensaje;        

        // Solo quiero el primero en estos momentos. Si hubiera más podría tenerlos en un atributo
        // y mostrarlos con un ngFor
        break;
      }
    }

    return mensajeError;
  }


  //-------------------------------------------------------------------------------------
  // Funciones de persistencia. Permiten guardar y recuperar tareas
  //-------------------------------------------------------------------------------------

  /**
   * Carga una receta
   */
  cargarReceta() {
      
    // Si estamos en modo edición, obtiene los parámeros
    // y carga los datos
    this.activatedRoute.params
    
    // Usamos switchMap, que permite cambiar el id (el parámetro de entrada)
    // por la tarea
    .pipe(

        switchMap( ({id}) => this.recetasService.getPorId(id) ),
        
        // Este pipe muestra lo que viene
        tap(console.log)
    )
    // Finalmente, este subscribe recibe el resultado, que será el objeto
    .subscribe({

        // Reciebe el siguiente valor
        next: (receta: Receta) =>  {

          // Cargo los datos en el formulario.
          this.formulario.reset(receta);
          
          //this.formulario.patchValue(respuesta.datos);  
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error: any) => {

          // Se vuelve al listado
          this.router.navigate([ '/contactos/listado2' ]);

          // Muestra un mensaje de error
          this.dialogService.mostrarToast('No ha sido posible cargar la receta: '+ error);
  
          // Muestra el error por consola
          console.log(error);
        }        
    });        
  }


  /**
   * Crea un contacto a partir de los datos en el form y pasa a modo edición
   */
  crearReceta() { 
    this.recetasService.post(this.formulario.getRawValue()).subscribe(           
      {      
        // Reciebe el siguiente valor
        next: (receta: Receta) =>  {

          // Se ha guardado el contacto. Paso a modo edición
          this.router.navigate(['/recetas/editar', receta.id ]);

          // Muestro un toast indicando que se ha guardado la receta
          this.dialogService.mostrarToast("Receta creada");

          // Muestra el contacto en el log
          console.log(receta);
        },

        // El observer ha recibido una notificación completa
        complete: () => {     
        },

        // El observer ha recibido un error
        error: (error : any) => {
          
          this.dialogService.mostrarMensaje('No ha sido posible crear el contacto: '+error, 'ERROR');
          console.log(error);
        }
      }
    );          
  }

   /**
   * Actualiza un contacto
   */
  actualizarReceta() {
    this.recetasService.put(this.formulario.getRawValue())
      .subscribe(
        {      
          // Recive el siguiente valor
          next: (receta: Receta) =>  {              
          },

          // El observer ha recibido una notificación completa
          complete: () => {     
            this.dialogService.mostrarToast("Receta guardada");
          },

          // El observer ha recibido un error
          error: (error) => {
            this.dialogService.mostrarMensaje('No ha sido posible crear la receta: '+error, 'ERROR');
            console.log(error);
          }
        }
      );
  }

}
