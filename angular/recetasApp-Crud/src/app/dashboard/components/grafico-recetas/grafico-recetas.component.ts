import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/recetas/services/recetas.service';

@Component({
  selector: 'app-grafico-recetas',
  templateUrl: './grafico-recetas.component.html',
  styleUrls: ['./grafico-recetas.component.css']
})
export class GraficoRecetasComponent {
  
  // Define la variable que va a almacenar los puntos en el gráfico
  dataPoints: any[] = [];
    
  // Puntero a la gráfica
  chart:any;

  // Opciones del gráfico 
  chartOptions: any = {};  


  constructor(
    private recetasService: RecetasService
  ) { }

  ngAfterViewInit(): void {

    // Carga los datos del gráfico
    this.recetasService.get().subscribe(recetas => {

      for (let receta of recetas) {

        // Crea el punto
        const punto = {
          name: receta.nombre,
          y: Number(1)
        }

        // Añade el punto
        this.dataPoints.push(punto);
      }      
      // Si no asigna aquí las opciones
      // no se refresca el gráfico
      this.chartOptions = {    
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "Recetas por puntuacion"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name}",
            legendText: "{name} (#percent%)",
            indexLabelPlacement: "outside",
            dataPoints: this.dataPoints      
        }]
      };
    });    
  }

}
