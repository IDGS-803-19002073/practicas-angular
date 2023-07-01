import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { DistanciapuntosModule } from './distanciapuntos/distanciapuntos.module';
import { ResistenciaModule } from './resistencia/resistencia.module';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    CinepolisModule,
    DistanciapuntosModule,
    ResistenciaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
