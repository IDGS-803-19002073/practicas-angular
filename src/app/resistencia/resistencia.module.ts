import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciaCompComponent } from './resistencia-comp/resistencia-comp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResistenciaCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],  
  exports:[
    
    ResistenciaCompComponent
  ]

})
export class ResistenciaModule { }
