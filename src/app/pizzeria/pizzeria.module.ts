import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzeriaCompComponent } from './pizzeria-comp/pizzeria-comp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PizzeriaCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],  
  exports:[
    
    PizzeriaCompComponent
  ]
})
export class PizzeriaModule { }
