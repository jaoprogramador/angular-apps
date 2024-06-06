import { Injectable } from '@angular/core';
import { IContacto } from '../models/contact.interface';
import { LISTA_CONTACTOS } from '../mocks/contacs.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  listaContactos: IContacto[] = LISTA_CONTACTOS;
  constructor() { }
  
  obtenerContactos(sexo?:string): Promise<IContacto[]> {
    return new Promise((resolve, reject) => {
      if (sexo === 'hombre') {
        const listaFiltrada = this.listaContactos.filter((contacto) => contacto.sexo === 'hombre');
        resolve(listaFiltrada);
      } else if (sexo === 'mujer') {
        const listaFiltrada = this.listaContactos.filter((contacto) => contacto.sexo === 'mujer');
        resolve(listaFiltrada);
      } else if (sexo === 'todos' || !sexo) {
        resolve(this.listaContactos);
      } else {
        reject('Filtro no válido');
      }
    });
  }
}
