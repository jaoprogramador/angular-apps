import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HolaJAO';
  usuario = 'jarana@mail.es';
  //Esta funcion se ejecuta cuando en el componente saludo.componente se ejecute el boton
  recibirMensajeHijo(evento: string){
    alert(evento);

  }
}
