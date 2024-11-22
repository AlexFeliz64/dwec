import { NgModule } from '@angular/core';
import * as CanvasJSAngularChart from '../../lib/canvasjs.angular.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GraficoRecetasComponent } from './components/grafico-recetas/grafico-recetas.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    CanvasJSChart,
    DashboardComponent,
    GraficoRecetasComponent,    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
