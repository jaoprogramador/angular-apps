import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss'
})

export class ContactDetailPageComponent implements OnInit{
  id: any |undefined;
  contacto: IContacto={
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    sexo:'',
    edad: 0
  };

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    console.log('ContactDetailPageComponent::ngOnInit');
    //vamos a leer los parametros
    this.route.params.subscribe(
      (params : any) => {
        if(params.id){
          this.id= params.id;
        }
      }
    )

    //vamos a leer el state del contacto
    if(history.state.data){
      this.contacto=history.state.data
    }
  };
  

}
