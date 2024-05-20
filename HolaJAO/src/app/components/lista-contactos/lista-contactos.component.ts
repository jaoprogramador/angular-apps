import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.scss'
})
export class ListaContactosComponent implements OnInit, OnDestroy{
  //creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //subscripcion al servcio
  subscription : Subscription | undefined;

  //inyectamos en el constructos el servicio de contactos
  constructor(private contactoService : ContactoService){
    

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    //Obtener la lista de contactos
    console.log('ListaContactosComponent:::ngOnInitINICIO');
    //this.listaContactos = this.contactoService.obtenerTodosContactos();
     
    /*
      this.contactoService.obtenerTodosContactos()
      .then((lista: IContacto[])=> this.listaContactos = lista)
      .catch((error) => alert(`Ha habido un error al recuperar la lista de contactos ${error}`))
      .finally(()=> console.log(`Peticion de lista de contactos terminada`))
      console.table(this.listaContactos);*/
      this.subscription = this.contactoService.obtenerTodosContactos()
      .subscribe({
        next: (lista: IContacto[]) => {
          this.listaContactos = lista;
          console.table(this.listaContactos);
        },
        error: (error) => alert(`Ha habido un error al recuperar la lista de contactos: ${error}`),
        complete: () => console.log(`Petición de lista de contactos terminada`)
      });

    console.log('ListaContactosComponent:::ngOnInit:FIN');

  }
  obtenerContacto(id: number){
    console.log(`Obtener info del contacto: &{id}`);
    //this.contactoSeleccionado=this.contactoService.obtenerContactoPorID(id);
    this.subscription=this.contactoService.obtenerContactoPorID(id)
    ?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto)
    
    /*COMPROMESAS
    ===========
    then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    .catch((error) => alert(`Ha habido un error al recuperar el contacto ${error}`))
    .finally(()=> console.log(`Peticion de contactos por id terminada`));*/
    
  }

}
