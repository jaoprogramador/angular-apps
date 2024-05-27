import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contact.interface';
import { IRandomContact } from '../models/randomUser';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
    //recibimos un objeto IContacto y devolvemos un string
    //transform(contacto: IContacto, ...args: unknown[]): string {  
    transform(contacto: IRandomContact, ...args: unknown[]): string {  
    return `${contacto.name.title} ${contacto.name.first} ${contacto.name.first}`;
    
  }

}
