import { Component, OnInit } from '@angular/core';
export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}
@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrl: './lista-basica.component.scss'
})
export class ListaBasicaComponent implements OnInit{
  listaElementos: Producto[] = [
    {
      nombre:"Leche",
      precio:100,
      descripcion:"leche desnatada"
    },
    {
      nombre:"Carne",
      precio:25,
      descripcion:"Solomillo"
    },
    {
      nombre:"Rape",
      precio:30,
      descripcion:"pescado fresco con cabeza"
    },
    {
      nombre:"Lechuga",
      precio:3,
      descripcion:"Verdura"
    }

  ]
  cargando : boolean=true;
  opcion : number=0;
//elseTemplate: TemplateRef<NgIfContext<boolean>>|null;

  constructor() { }

  ngOnInit(): void{
    console.log('ListaBasica:onInit');

  }
  cambiarCargando(): void{
    this.cargando = !this.cargando;
    console.log('ListaBasica:cambiarCargando');

  }
  escogerOpcion(opcionEscogiga : number): void{
    this.opcion=opcionEscogiga; //
    console.log('ListaBasica:escogerOpcion');

  }
//[x: string]: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

}
