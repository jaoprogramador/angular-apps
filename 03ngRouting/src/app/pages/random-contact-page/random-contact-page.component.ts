import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from '../../models/randomUser';






@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']


})


export class RandomContactPageComponent implements OnInit {

  constructor(private randomUserService: RandomUserService) {}
  listaRandomContacts: IRandomContact[] = [];

  contact: IRandomContact = {
    gender: '',
    name: { title: '', first: '', last: '' },
    location: {
      street: { number: 0, name: '' },
      city: '',
      state: '',
      country: '',
      postcode: 0,
      coordinates: { latitude: '', longitude: '' },
      timezone: { offset: '', description: '' }
    },
    email: '',
    login: {
      uuid: '',
      username: '',
      password: '',
      salt: '',
      md5: '',
      sha1: '',
      sha256: ''
    },
    dob: { date: new Date(), age: 0 },
    registered: { date: new Date(), age: 0 },
    phone: '',
    cell: '',
    id: { name: '', value: '' },
    picture: { large: '', medium: '', thumbnail: '' },
    nat: ''
  };

  ngOnInit(): void {
    console.log('RandomContactPageComponent:::ngOnInit');
    this.randomUserService.obtenerUsuarioAleatorio().subscribe(
      (response: Results) => {
        this.contact = response.results[0];
        console.table(this.contact.name);
        console.log('RandomUserComponent:::OnInit');
      }
    );
  }

  obtenerNuevoContacto(): void {
    console.log('RandomContactPageComponent:::obtenerNuevoContacto');
    this.randomUserService.obtenerUsuarioAleatorio().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0];
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`)
    });
  }
  obtener10Aleatorios(){
    this.randomUserService.obtenerListaRandom10Contacts(10).subscribe({
      next: (response: Results) => {
        //console.log(response);
        response.results.forEach((randomContact: IRandomContact, index: number ) => {
          this.listaRandomContacts.push(randomContact);
          console.log(this.listaRandomContacts);  
          
        })
        
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`)
    });
  }
  obtene10ContactosAleatorios(num : number): void {
    console.log('RandomContactPageComponent:::obtenerNuevoContacto');
    this.randomUserService.obtenerListaRandomContacts(num).subscribe({
      next: (response: Results[]) => {
        //QUIRO CARGANLO AQUI

        console.log(response);
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`)
    });
  }

  obteneContactos(num : number): void {
    console.log('RandomContactPageComponent:::obtenerNuevoContacto');
    this.randomUserService.obtenerListaRandomContacts(num).subscribe({
      next: (response: Results[]) => {
        console.log(response);
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info(`Peticion de random contact terminada`)
    });
  }
}

    
