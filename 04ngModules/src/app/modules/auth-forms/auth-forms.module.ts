import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginFormComponent } from '../authForms/components/login-form/login-form.component';
//import { RegisterFormComponent } from '../authForms/components/register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';




@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    //IMPORTAMOS EL MODULO DE PETICIONES http Y FORMULARIOSREACTIVOS
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //aquí exportamos el contenido del modulo
  exports: [
    LoginFormComponent,
    RegisterFormComponent
    ],
  providers:[
    AuthService
  ]
})
export class AuthFormsModule { }
