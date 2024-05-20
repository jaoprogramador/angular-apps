import { Injectable } from '@angular/core';
import { IContacto } from '../models/contacto.interface';
import { CONTACTOS } from '../mocks/contactos.mock';
//importamos observables de rxjs
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  //devolvemos todos los contactos
  obtenerTodosContactos() : Observable <IContacto[]>{
    console.log('ContactoService::obtenerTodosContactos' );
    return of(CONTACTOS);
    //return Promise.resolve(CONTACTOS);
    //return CONTACTOS;
  }

  //buscamos contacto por ID
  obtenerContactoPorID(id: number): Observable <IContacto> | undefined {
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    //creamos el observable
    let observable : Observable<IContacto> = new Observable(observer =>{
        observer.next(contacto);//emitimos un valor a todo componente suscrito
        observer.complete();//no emitimos más valores
    })

    if(contacto){
      return observable;
      //return Promise.resolve(contacto);
    }else{
      return;
    }


  }
}


