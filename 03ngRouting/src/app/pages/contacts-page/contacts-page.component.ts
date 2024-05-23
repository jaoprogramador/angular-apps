import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent implements OnInit{
  

  /*listaContactos: IContacto[]=[
    {
      id:1,
      nombre:'Gorka',
      apellidos:'Guruzeta',
      email:'gguru@mail.es',
      edad:23,
      sexo:'hombre'
    },
    {
      id:2,
      nombre:'Asier',
      apellidos:'Villalibre',
      email:'bufalo@mail.es',
      edad:24,
      sexo:'hombre'
    }
    ,
    {
      id:3,
      nombre:'Inaki',
      apellidos:'Williams',
      email:'iwilly@mail.es',
      edad:28,
      sexo:'hombre'
    },
    {
      id:4,
      nombre:'Naikari',
      apellidos:'Naikari',
      email:'naik@mail.es',
      edad:28,
      sexo:'mujer'
    }

  ]*/
  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];
  contactoSeleccionado : IContacto | undefined;
  constructor(
    private router: Router, 
    private route:ActivatedRoute,
    private contactService: ContactService){}

  ngOnInit(): void {
    

    //obtener los QueryParams
    this.route.queryParams.subscribe((params:any) => {
      console.log('QueryParams',params.sexo);
      if(params.sexo){
        this.filtroSexo = params.sexo;
      }      
      //Obtener la lista de contactos desde el servicio
      this.contactService.obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((error) => console.error('Error al obtener los contactos:', error))
        .finally(() => console.info('Petición de contactos terminada'));
    });


    

    //leemos del estado del historial de navegacion
    console.log('ContactsPageComponent::ngOnInit');
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado=history.state.data;
    }
      
  }
  //ejemplo de como pasa la informacion entre componentes a trasves de ESTADO
  //al dar a "colverAHome" pasamos a la home el objeto Icontacto clickado
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras= {
      state: {
        data: contacto
      }
    }
    //this.router.navigate(['/contacts/:id'],navigationExtras);
    this.router.navigate(['/home'],navigationExtras);
  }
  irAlDetalle(contacto: IContacto){
    let navigationExtras: NavigationExtras= {
      state: {
        data: contacto
      }
    }
    //this.router.navigate(['/contacts/:id'],navigationExtras);
    this.router.navigate(['/contacts', contacto.id], navigationExtras);

    
  }


}
