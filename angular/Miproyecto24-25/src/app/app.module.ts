import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuPeliculasComponent } from './pages/menuPeliculas/menuPeliculas.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TarjetaPeliculaComponent } from './pages/tarjeta-pelicula/tarjeta-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPeliculasComponent,
    PeliculaComponent,
    BuscarComponent,
    ListadoComponent,
    NavbarComponent,
    TarjetaPeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
