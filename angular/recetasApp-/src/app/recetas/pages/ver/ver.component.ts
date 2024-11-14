import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  constructor(

    private activatedRoute    : ActivatedRoute,
    private router            : Router,
  
    private recetaService     : RecetasService
  
  ) { }
  
  /**
   * Inicialización de la página
   */
  ngOnInit(): void {
  
    // Carga la tarea
    this.cargarReceta();
  
  }
  
  
  //-------------------------------------------------------------------------------------
  // Funciones de persistencia. Permiten guardar y recuperar tareas
  //-------------------------------------------------------------------------------------
  
  /**
   * Cuando estamos editando, este método carga la tarea que estamos editando en el formulario
   */
   cargarReceta() {
      
    // Si estamos en modo edición, obtiene los parámeros
    // y carga los datos
    this.activatedRoute.params
      
      // Usamos switchMap, que permite cambiar el id (el parámetro de entrada)
      // por la tarea
      .pipe(
  
          switchMap( ({id}) => this.recetaService.getRecetaPorId(id) ),
          
          // Este pipe muestra lo que viene
          tap(console.log)
      )
      // Finalmente, este subscribe recibe el resultado, que será el objeto
      .subscribe(respuesta => {
        
        if(respuesta.ok) {
  
          // Carga los datos
          this.receta = respuesta.datos;
  
        } else {
          this.router.navigate([ '../receta/listado' ]);
        }
      });
  }

}
