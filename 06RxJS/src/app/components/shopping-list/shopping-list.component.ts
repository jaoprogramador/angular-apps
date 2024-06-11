import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { ShoppingService } from './../../services/shopping.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../types/product.type';
//import { miObservableDeStrings } from '../../examples/Ejemplo1RxJS';


@Component({
  selector: 'app-shopping-list',
  //standalone: true,
  //imports: [],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  
  shoppingList: Product[] = [];
  subscription: Subscription =   new Subscription();

  subjects : Subject <string> = new Subject();
  behaviorSubject :  BehaviorSubject <string>= new BehaviorSubject('valor por defecto');
  

  constructor(private shoppingService: ShoppingService){}

  

  /**
   * next => atributo obligatorio de cualquier observable. Es la funcionalidad que recibe
   * del observable al emitir nuevos valores
   * error => la funcionalidad opcional que gestiona las notificaciones de error
   * que puede lanzar el observable
   * completed => la funcionalidad que gestiona la notificacion de una ejecución completa
   */
  ngOnInit(): void {
    console.log('ShoppingListComponent::ngOnInit');
    /*
    FORMA 1:
    ========
      this.subscription = this.shoppingService.getAllProducts().subscribe(
      (list: Product[]) => {
        this.shoppingList = list;
      }
    ), 
    (( error : any ) => console.error(`Ha ocurrido un error al obtener la lista ${error}`)),
    (() => console.info(`Se ha obtenido la lista de productos `));*/
/*
    FORMA 2: Esta es la forma recomendada porque controla los tres estados : next, error y , complete
    ========
    
    this.subscription = this.shoppingService.getAllProducts().subscribe({
      next: (list: Product[]) => {
        this.shoppingList = list;
        console.table(`Lista Obtenido ${this.shoppingList}`);
      },
      error: (error: any) => {
        console.log(`Error: ${error}`);
      },
      complete: () => {
        console.info(`Hemos terminado`);
      }
    });
    */
    
    /*EJEMPLO 2
    =============
    ejemplo de recepcion de direfentes valores
    
    
   this.subscription.add(
    this.shoppingService.getUserData().subscribe({
      next: (valor: string | number) => {
        console.log(`${valor}`)
      },
        
      error: (error: any) => {
        console.log(`Error: ${error}`)
      },
      complete: () => {
        console.info(`Hemos terminado`)
      }
    })

   )*/

    /**
     * EJEMPLO de Observable personalizado
     
    miObservableDeStrings('Aitor','Joanes','Jaime','Esti', 'Joseba').subscribe({
      next: (valor: string | number) => {
        console.log(`${valor}`)
      },
        
      error: (error: any) => {
        console.log(`Error: ${error}`)
      },
      complete: () => {
        console.info(`Hemos terminado`)
      }

    })*/

     /**
     * EJEMPLO de captura de clicks en el documento mediante un Observable
     * */
    this.shoppingService.getClicks().subscribe({
      next: (valor: Event) => console.log(`Click:  ${valor.target}`),
      error: (error: any) => console.log(`Ha ocurrido un Error: ${error}`),
      complete: () => console.info(`Terminado observable que escucha clicks`)
    })


    
  }
  ngOnDestroy(): void {
    console.log('ShoppingListComponent::ngOnDestroy');
    //desuscribimos al cerrar el componente
    this.subscription.unsubscribe();
  }
}


