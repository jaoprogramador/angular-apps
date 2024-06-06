import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class DataListProvider{
  /**
   * @return {[]} lista de nombres aleatorios
   * 
   */
  get data(){
    const RandomName = Mock.Random;
    return [
        RandomName.first(),
        RandomName.first(),
        RandomName.first()
      ];
    

  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrl: './detach.component.scss'
})
export class DetachComponent implements OnInit{
  constructor( private _ref: ChangeDetectorRef, public dataListProvider: DataListProvider ) {}
  ngOnInit(): void {
    console.log('DetachComponent:::ngOnInit');
     // Vamos a conseguir que haya un cambio en
    // La lista de nombres cada 5 segundos
    // a pesar, de que la lista de nombres va a estar
    // constantemente cambiando

    // 1. Realizamos un DETACH, para que los cambios no se muestren
    this._ref.detach();

    // 2. Planteamos un intervalo que cada 5 segundos realice un
    // detectChanges() para que coja el último cambio que haya habido
    // Es decir, los datos van a estar cambiando constantemente, pero
    // la vista solo se actualizará cada 5 segundos con los valores de
    // ese momento concreto
    setInterval(() => {
      // Forzamos manualmente a que los cambios se comprueben y se
      // se reflejen en la vista
      this._ref.detectChanges();
    }, 5000);

  }


}


