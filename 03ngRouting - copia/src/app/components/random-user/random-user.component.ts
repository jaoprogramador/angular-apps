import { Component, OnInit, Input } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from '../../models/randomUser';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'] 
})
export class RandomUserComponent implements OnInit {
  longText = `Es una persona que se dedica a la informatica, mas
   concretamente al analisis y desarrollo de aplicaciones Java con angular.
   Tiene experiencia en distintos clientes, tanto de administración pública
    y privada desempeñando distintos roles.`;

  //randomResults: Results | undefined;
  //@Input() randomContact: IRandomContact | undefined;
  @Input() randomContact: IRandomContact  = {
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

  constructor(/*private randomUserService: RandomUserService*/) {}

  ngOnInit(): void {
    /*this.randomUserService.obneterUsuarioAleatorio().subscribe((response: Results) => {
      this.randomContact = response.results[0];
      console.table(this.randomContact.name);
      console.log('RandomUserComponent:::OnInit');
    });*/
  }
}

