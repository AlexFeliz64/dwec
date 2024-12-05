import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuPeliculasComponent } from './pages/menuPeliculas/menuPeliculas.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { TarjetaPeliculaComponent } from './pages/tarjeta-pelicula/tarjeta-pelicula.component';
import { ModalAgregarPeliculaComponent } from './pages/modal-agregar-pelicula/modal-agregar-pelicula.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuPeliculasComponent,
    PeliculaComponent,
    BuscarComponent,
    ListadoComponent,
    TarjetaPeliculaComponent,
    ModalAgregarPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
