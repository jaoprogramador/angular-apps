import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  constructor (private authService: AuthService){}
  ngOnInit(): void {
    console.log('LoginFormComponent::ngOnInit');
    this.authService.login("eve.holt@reqres.in", "cityslicka").subscribe(//{
      //next: (value: any) => {
        (response)=> {
        console.log('Respuesta login', response);
        sessionStorage.setItem(`token`,response.token);
      },
      //error: (err) => {
        (error)=> console.error(` Ha ocurrido un error en el proceso de login ${error}`),
        () => console.info('Se ha completado la llamada de login REQRES')
      );
      
    }
}

