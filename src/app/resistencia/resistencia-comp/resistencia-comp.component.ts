import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia-comp',
  templateUrl: './resistencia-comp.component.html',
  styleUrls: ['./resistencia-comp.component.css']
})
export class ResistenciaCompComponent {

  valores: { [key: string]: number } = {
    "1": 0,
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
    "10": 9
  };
  
  english_names: { [key: string]: string } = {
    "1": "black",
    "2": "brown",
    "3": "red",
    "4": "orange",
    "5": "yellow",
    "6": "green",
    "7": "blue",
    "8": "violet",
    "9": "gray",
    "10": "white",
    "oro": "gold",
    "plata": "silver"
  };
  
  esp_names: { [key: string]: string } = {
    "1": "negro",
    "2": "cafe",
    "3": "rojo",
    "4": "naranja",
    "5": "amarillo",
    "6": "verde",
    "7": "azul",
    "8": "violeta",
    "9": "gris",
    "10": "blanco",
    "oro": "oro",
    "plata": "plata"
  };
  
  banda1!: number;
  banda2!: number;
  banda3!: number;
  valor!: number;
  valor_minimo!: number;
  valor_maximo!: number;
  banda1_en: string = "";
  banda2_en: string = "";
  banda3_en: string = "";
  tolerancia_en: string = "";
  valor1!: number;
  valor2!: number;
  valor3!: number;
  tolerancia_valor!: number;
  selected: string = 'oro';
  select = [
    'oro',
    'plata'
  ];
  multiplicador: number = 0;
  
  calcularResistencia() {
    this.banda1_en = this.english_names[this.banda1.toString()];
    this.banda2_en = this.english_names[this.banda2.toString()];
    this.banda3_en = this.english_names[this.banda3.toString()];
    this.tolerancia_en = this.english_names[this.selected];
  
    this.valor1 = this.valores[this.banda1.toString()];
    this.valor2 = this.valores[this.banda2.toString()];
    this.valor3 = this.valores[this.banda3.toString()];
  
    this.multiplicador = Math.pow(10, this.valor3);
    this.tolerancia_valor = this.selected === "oro" ? 0.05 : 0.1;

    this.valor = ((this.valor1 * 10) + this.valor2) * this.multiplicador;
    this.valor_minimo = this.valor * (1 - this.tolerancia_valor);
    this.valor_maximo = this.valor * (1 + this.tolerancia_valor);
  }
  
  
  
}
