import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent implements OnInit{
  listaContactos: IContacto[]=[
    {
      id:1,
      nombre:'Gorka',
      apellidos:'Guruzeta',
      email:'gguru@mail.es'
    },
    {
      id:2,
      nombre:'Asier',
      apellidos:'Villalibre',
      email:'bufalo@mail.es'
    }
    ,
    {
      id:3,
      nombre:'Inaki',
      apellidos:'Williams',
      email:'iwilly@mail.es'
    }
  ]


  ngOnInit(): void {
    console.log('ContactsPageComponent::ngOnInit');
  }

}
