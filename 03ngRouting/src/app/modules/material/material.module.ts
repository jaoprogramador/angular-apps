import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos exportados de angular material: button, card, input
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule}  from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import para iconos
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
