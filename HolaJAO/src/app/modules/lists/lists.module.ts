import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //exportamos las clases que queramos compartir
    ListaBasicaComponent
  ]
})
export class ListsModule { }
