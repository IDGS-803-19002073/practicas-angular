import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { DistanciapuntosModule } from './distanciapuntos/distanciapuntos.module';
import { ResistenciaModule } from './resistencia/resistencia.module';




@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    CinepolisModule,
    DistanciapuntosModule,
    ResistenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
