import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //variable para el ejemplo de REATACH
  live : boolean = true;
  /*
  title = 'HolaJAO';
  usuario = 'jarana@mail.es';
  //Esta funcion se ejecuta cuando en el componente saludo.componente se ejecute el boton
  recibirMensajeHijo(evento: string){
    alert(evento);

  }*/
  // Lista de Datos para Ejemplo Async Pipe
  numeros: number[] = [];
  // Behaviour Subject que recibe por defecto un valor inicial
  numero$ = new BehaviorSubject(this.numeros);

  /**
   * Método que añade un nuevo valor aleatorio
   * a la lista de numeros
   */
  anadir() {

    // Añadimos un valor aleatorio a la lista de números
    this.numeros.push(Math.floor(Math.random() * 100) + 1);

    // Emitimos a través de next() la nueva lista
    // con el elemento añadido
    this.numero$.next(this.numeros);

  }


}
