import { Injectable } from '@angular/core';
//importaciones de rxjs
import { fromEvent, Observable, of } from 'rxjs';

import { PRODUCT_LIST } from '../mocks/products.mock';
import { Product } from '../types/product.type';
//import {Product} from '../types/product.type';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    console.log('ShoppingService::getAllProducts');
    return of (PRODUCT_LIST);
  }

  getUserData(): Observable<string | number>{
    return of('Hola','Juantxu', 42);
  }

  getClicks(): Observable<Event>{
    return fromEvent(document, 'click');
  }
}
