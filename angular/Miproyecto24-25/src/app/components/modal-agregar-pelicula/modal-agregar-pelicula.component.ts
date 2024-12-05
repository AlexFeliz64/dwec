import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ValidacionService } from 'src/app/shared/services/validacion.service';

@Component({
  selector: 'app-modal-agregar-pelicula',
  templateUrl: './modal-agregar-pelicula.component.html',
})
export class ModalAgregarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  formGuardado: boolean = false;

  @Input() peliculaEdicion: Pelicula | null = null;  
  @Output() peliculaAgregada = new EventEmitter<Pelicula>();
  @Output() cerrarModal = new EventEmitter<void>();  

  constructor(
    private peliculaservice: PeliculasService,
    private fb: FormBuilder,
    private validacionService: ValidacionService
  ) {
    this.peliculaForm = this.fb.group({
      titulo: ['', 
        Validators.required],

      genero: ['', 
        Validators.required],

      duracion: ['', 
        [Validators.required, this.validacionService.validarDuracion]],

      fecha_de_lanzamiento: 
      ['', [Validators.required, this.validacionService.validarFecha]],
      
      portada: [''],
    });
    
  }

  ngOnInit(): void {
    // Si es una edición, llenar el formulario con los datos de la película
    if (this.peliculaEdicion) {
      this.peliculaForm.patchValue({
        titulo: this.peliculaEdicion.titulo,
        genero: this.peliculaEdicion.genero,
        duracion: this.peliculaEdicion.duracion,
        fecha_de_lanzamiento: this.peliculaEdicion.fecha_de_lanzamiento,
        portada: this.peliculaEdicion.portada,
      });
    }
  }

  comprobarValidacion(){

  }

  guardar(): void {

    this.formGuardado = true;

    this.peliculaForm.markAllAsTouched();

    if (this.peliculaForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    } else {
      if (this.peliculaEdicion) {
        this.editarPelicula();
      } else {
        this.crearPelicula();
      }
    }
  }

  crearPelicula(): void {
    const nuevaPelicula: Pelicula = this.peliculaForm.getRawValue();
    this.peliculaservice.agregarPelicula(nuevaPelicula).subscribe({
      next: (respuesta) => {
        this.peliculaForm.reset();
        this.peliculaAgregada.emit(respuesta);
        alert('Película agregada exitosamente.');
        this.cerrarModal.emit();  
      },
      error: (error) => {
        console.error('Error al guardar la película:', error);
        alert('Ocurrió un error al guardar la película.');
      },
    });
  }

  editarPelicula(): void {
    const peliculaEditada: Pelicula = this.peliculaForm.getRawValue();
    this.peliculaservice.editarPelicula(this.peliculaEdicion!.id, peliculaEditada).subscribe({
      next: (respuesta) => {
        this.peliculaForm.reset();

        // Emitir evento de película editada
        this.peliculaAgregada.emit(respuesta);  
        alert('Película editada exitosamente.');

        // Cierra el modal después de editar
        this.cerrarModal.emit();  
      },
      error: (error) => {
        console.error('Error al editar la película:', error);
        alert('Ocurrió un error al editar la película.');
      },
    });
  }
}



  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Asignar un nombre de archivo basado en el id, por ejemplo "1.png"
  //     const id = this.peliculaForm.get('id')?.value;
  //     if (id) {
  //       this.peliculaForm.patchValue({ portada: `${id}.png` });
  //     }
  //   }
  // }

