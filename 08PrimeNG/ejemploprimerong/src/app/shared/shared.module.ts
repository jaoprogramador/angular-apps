import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuComponent } from './menu/menu.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
   declarations: [
     /*MenuComponent*/
  ],  
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    /* MenuComponent, */
    PrimengModule]
})
export class SharedModule { }
