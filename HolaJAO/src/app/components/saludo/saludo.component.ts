import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges{
  @Input() nombre:string ="Anónimo";
  @Output() mesajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  myStyle: object= {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  constructor(){}
 
  ngOnInit(): void {
    //instrucciones previas al a la renderizacion dl componente
    console.log('onload componenteSaludo');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }
  //ejemplo para gestionar los eventos de click y enviar mensaje al padre
enviarMensajeAlPadre(): void{
  //alert(`Hola, ${this.nombre} desde el botón click`);
  this.mesajeEmitter.emit(`Hola Emit, ${this.nombre} desde el botón click`);
}
alertaSaludo(): void{
  alert(`Hola, ${this.nombre} desde el botón click`);
  
}

}
