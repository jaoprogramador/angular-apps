import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { ContactService } from '../../services/contact.service';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from '../../models/randomUser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent implements OnInit{
  

  cargando: boolean=true;
  filtroSexo: string = 'todos';
  //listaContactos: IContacto[] = [];
  listaRandomContacts: IRandomContact[] = [];
  contactoSeleccionado : IRandomContact | undefined;
  constructor(
    private router: Router, 
    private route:ActivatedRoute,
    /*private contactService: ContactService, */
    private randomContactService: RandomUserService){}

  ngOnInit(): void {
    

    //obtener los QueryParams
    this.route.queryParams.subscribe((params:any) => {
      console.log('QueryParams',params);
      if(params){
        this.filtroSexo = params.sexo;
        if(params.sexo==='female' || params.sexo==='male'){
          console.log('ContactsPageComponent::: ngOnInit Sexo:',params.sexo);
          this.randomContactService.obtenerListaRandom10ContactsSexo(10,params.sexo).subscribe({
            next: (response: Results) => {
              //console.log(response);
              response.results.forEach((randomContact: IRandomContact, index: number ) => {
                this.listaRandomContacts.push(randomContact);
                this.cargando=false;
              })
              console.log(this.listaRandomContacts);
            },
            error: (error) => console.error(`${error}`),
            complete: () => console.info(`Peticion de random contact terminada`)
          });

        }else{
          console.log('ContactsPageComponent::: ngOnInit Sexo:',params.sexo);
          this.randomContactService.obtenerListaRandom10Contacts(10).subscribe({
            next: (response: Results) => {
              //console.log(response);
              response.results.forEach((randomContact: IRandomContact, index: number ) => {
                this.listaRandomContacts.push(randomContact);
                this.cargando=false;
              })
              console.log(this.listaRandomContacts);
            },
            error: (error) => console.error(`${error}`),
            complete: () => console.info(`Peticion de random contact terminada`)
          });
          
        }
      }      
      //Obtener la lista de contactos desde el servicio
      /*this.contactService.obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((error) => console.error('Error al obtener los contactos:', error))
        .finally(() => console.info('Petición de contactos terminada'));*/
        
    });


    

    //leemos del estado del historial de navegacion
    console.log('ContactsPageComponent::ngOnInit');
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado=history.state.data;
    }
    //this.obtene10ContactosAleatorios();
      
  }
  //Obtener la lista de contactos aleatorios
  obtene10ContactosAleatorios(): void {
    console.log('RandomContactPageComponent:::obtene10ContactosAleatorios:INI');
    this.randomContactService.obtenerListaRandom10Contacts(10).subscribe({
      next: (response: Results) => {
        //console.log(response);
        response.results.forEach((randomContact: IRandomContact, index: number ) => {
          this.listaRandomContacts.push(randomContact);
        })
        console.log(this.listaRandomContacts);
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`)
    });
    console.log('RandomContactPageComponent:::obtene10ContactosAleatorios:FIN');
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
    //this.router.navigate(['/home'],navigationExtras);
    this.router.navigate(['/dashboard'],navigationExtras);
  }
  //irAlDetalle(contacto: IContacto){
    irAlDetalle(contacto: IRandomContact){
    let navigationExtras: NavigationExtras= {
      state: {
        data: contacto
      }
    }
    //this.router.navigate(['/contacts/:id'],navigationExtras);
    this.router.navigate(['/dashboard/contacts', contacto.id], navigationExtras);

    
  }


}
