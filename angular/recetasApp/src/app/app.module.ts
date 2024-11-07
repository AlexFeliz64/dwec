import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/pages/dashboard/dashboard.component';
import { ListadoComponent } from './tasks/pages/listado/listado.component';
import { EditarComponent } from './tasks/pages/editar/editar.component';
import { VerComponent } from './tasks/pages/ver/ver.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListadoComponent,
    EditarComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
