import { RouterModule,Routes } from "@angular/router";
import {NgModule} from "@angular/core";
import { CinepolisCompComponent } from "./cinepolis/cinepolis-comp/cinepolis-comp.component";
import { DistanciapuntosCompComponent } from "./distanciapuntos/distanciapuntos-comp/distanciapuntos-comp.component";
import { ResistenciaCompComponent } from "./resistencia/resistencia-comp/resistencia-comp.component";
import { PizzeriaCompComponent } from "./pizzeria/pizzeria-comp/pizzeria-comp.component";

const routes:Routes=[
    {path:'Distancia',component:DistanciapuntosCompComponent},
    {path:'Cinepolis',component: CinepolisCompComponent},
    {path:'Resistencia',component:ResistenciaCompComponent},
    {path:'Pizzeria',component:PizzeriaCompComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}