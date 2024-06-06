import { Component,Injectable, ChangeDetectorRef, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class PrecioBitCoinProvider{
  precio : number =100;
  
  constructor(){
    //cada medio segundo generamos un precio nuevo
    setInterval(() => {
      this.precio = Math.floor(Math.random() *1000 ) +100;
      console.log(`Precio Bitcoin actual: ${this.precio}`);
      
    }, 500);
  }
}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrl: './reattach.component.scss',
  // Input que recibe el componente para saber si
  // tiene que mostrar los cambios del valor en vivo o no (true/false)
  inputs: ['enVivo']

})
export class ReattachComponent implements OnInit{
  mostrarEnVivo: boolean = true;

  constructor(private _ref:ChangeDetectorRef, public precioBitcoin: PrecioBitCoinProvider){ }
  
  ngOnInit(): void {
    console.log('ReattachComponent.');
  }
  set enVivo(valor: boolean){
    this.mostrarEnVivo = valor;
    if(valor){
      this._ref.reattach();//reacoplamos TS y HTML para ver los cambios en vivo
    }else{
      this._ref.detach();//desacoplamos el TS y el HTML para no actualizar la vista
    }
  }

  
  

}
