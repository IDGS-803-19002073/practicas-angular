import { Component } from '@angular/core';

@Component({
  selector: 'app-distanciapuntos-comp',
  templateUrl: './distanciapuntos-comp.component.html',
  styleUrls: ['./distanciapuntos-comp.component.css']
})
export class DistanciapuntosCompComponent {
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:number;

   calcularPuntos()
        {
            this.resultado =  Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));

        }


}

