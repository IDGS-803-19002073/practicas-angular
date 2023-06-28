import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CinepolisCompComponent } from '../cinepolis/cinepolis-comp/cinepolis-comp.component';





@NgModule({
  declarations: [CinepolisCompComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule

  ],
  exports:[
    CinepolisCompComponent
  ]
})
export class CinepolisModule { }