import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-ejemplo-struct',
  templateUrl: './ejemplo-struct.component.html',
  styleUrl: './ejemplo-struct.component.scss'
})
export class EjemploStructComponent implements OnInit {

  rol: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarRol(){
    this.rol = !this.rol;
  }

}

