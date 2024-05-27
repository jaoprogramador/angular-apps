import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IRandomContact } from '../../models/randomUser';
//import { IContacto } from '../../models/contact.interface';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  token : string | null = null;
  //contactoSeleccionado : IContacto | undefined;
  contactoSeleccionado : IRandomContact | undefined;
  constructor ( private router : Router){}
  ngOnInit(): void {
    //Comprobar si existe el token de sessionStorage
    this.token = sessionStorage.getItem('token');
    if(sessionStorage.getItem('token')){

    }
    console.log('HomePageComponent::ngOnInit');
    //leemos del historial de navegacion el contacto seleccionado IContact
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado= history.state.data;
    }
    
  }

  navegarAContacts(){
    let navigationExtras: NavigationExtras={
      queryParams: {
        filter:'todos'
      }
    }
    console.log('HomePageComponent::navegarAContacts');
    this.router.navigate(['contacts'],navigationExtras);
    
  }

}
