import { Component, OnInit } from '@angular/core';
import {trigger,state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrl: './ejemplo-animacion.component.scss',
  //metadatos para la animacion del componente
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(40px, 50px)'
      })),
      state('subir', style({
        transform: 'translateY(10px)'
      })),
      state('ampliar', style({
        transform: 'scale(2,2)',
        backgroundColor: 'green'
      })),
      state('original', style({
        transform: 'scale(1,1)'
      })),      
      
      /*state('bajar', style({
        transform: 'translateY(-10px)'
      })),*/
      state('rotar', style({
        transform: 'rotate(90deg)'
        //Las rotaciones se pueden hacer en X o en Y
        //transform: 'rotateX(90deg)'
        //transform: 'rotateY(90deg)'

      })),
      transition('inactive <=> active', [animate('1000ms ease-in')]),
      transition('active <=> inactive', [animate('1000ms ease-out')]),
      transition('active <=> subir', [animate('1000ms ease-in')]),
      transition('active <=> rotar', [animate('1000ms ease-in')]),
      transition('inactive <=> rotar', [animate('1000ms ease-in')]),
      transition('inactive <=> rotar', [animate('1000ms ease-in')]),
      transition('subir <=> active', [animate('1000ms ease-in')]),
      transition('subir <=> inactive', [animate('1000ms ease-in')]),
      transition('rotar <=> active', [animate('1000ms ease-in')]),
      transition('rotar <=> inactive', [animate('1000ms ease-in')])
    ])
  ]

})
export class EjemploAnimacionComponent implements OnInit{

  state: string ='inactive';
  
  constructor(){}

  ngOnInit(): void {
    console.log('EjemploAnimacionComponent::ngOnInit');
   /* setInterval(()=> {
      if(this.state == 'active'){
        this.state = 'inactive';
      }else{
        this.state = 'active'
      }
    },500);*/

    setTimeout(()=> {
      this.state= 'active';
    },500);

    
  }

  subir(){
    this.state= 'subir';
  }
  bajar(){
    this.state= 'bajar';
  }
  rotar(){
    this.state= 'rotar';
  }
  cambiarTamanio(){
    if(this.state == 'ampliar'){
      this.state = 'original';  
    }else{
      this.state = 'ampliar';
    }
    
  }
  original(){
    this.state= 'original';
  }

  cambiarEstadoActivado(){
    if(this.state == 'active'){
      this.state = 'inactive';  
    }else{
      this.state = 'active';
    }
  }
  

  

}
