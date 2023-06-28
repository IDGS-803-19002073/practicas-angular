import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-comp',
  templateUrl: './cinepolis-comp.component.html',
  styleUrls: ['./cinepolis-comp.component.css']
})
export class CinepolisCompComponent {
  // boletosMaximos!:number;
  nombre!:string;
  cantidadCompradores!:number;
  cantidadBoletos!:number;
  selected:string = 'si';
  resultado!:string;
  valorPaga!:number;
  valorDescuento!:number;
  select=[
    'si',
    'no'
  ]
  validar(){
    let boletosMaximos=this.cantidadCompradores*7;
    if(this.cantidadBoletos>boletosMaximos){
      alert('La cantidad de boletos por persona no debe ser mayor a 7');
    }else{
      if(this.cantidadBoletos>5){
        this.valorPaga=this.cantidadBoletos*12;
        this.valorDescuento=this.valorPaga-(parseInt(this.valorPaga.toString())*0.15);
    }else if(this.cantidadBoletos==3 || this.cantidadBoletos==4 || this.cantidadBoletos==5){
        this.valorPaga=this.cantidadBoletos*12;
        this.valorDescuento=this.valorPaga-(parseInt(this.valorPaga.toString())*0.10);
    }else{
      this.valorDescuento=this.cantidadBoletos*12;
  
    }    
    switch(this.selected){
      case 'si':
        this.valorDescuento =  this.valorDescuento-(parseInt(this.valorDescuento.toString())*0.10);
        break;

    }
  

    }

 
  }

}
