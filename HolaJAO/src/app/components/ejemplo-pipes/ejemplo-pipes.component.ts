import { Component, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.scss'
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(1981,4,17);
  cambio: boolean = true;
  nombre : string = 'Juantxu';
  jugador1: IJugador = {
    nombre:'Drazen Petrovic',
    puntos: [20,15,31,18]
  };
  jugador2: IJugador = {
    nombre:'Luca Doncic',
    puntos: [10,15,41,38]
  }
  num_PI: number = 3.1415925;
  precioCarrito: number = 5.350;
  persona: IContacto={
    id: 1,
    nombre: 'David',
    apellidos: 'Muñoz',
    email: 'david@mail.es',
    edad: 31
  }
  cantidad:number = 35;
  textoLargo:string = 'Últimas noticias de Bizkaia con la más completa actualidad informativa de..';
  constructor (){}

  ngOnInit(): void {
    console.log('EjemploPipesComponent::OnInit');
  }
  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate';
  }
  cambiarFormato(){
    this.cambio= !this.cambio;

  }


}
