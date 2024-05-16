import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
//import { LoginComponent } from './components/auth/login/login.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
//import { RegisterFomrComponent } from './components/auth/register-fomr/register-fomr.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { NotFountPageComponent } from './components/pages/not-fount-page/not-fount-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    //LoginComponent, TODO LO HE QUITADO XQ AL CREARLO LO HE ESCRITO MAL ,LO BORRE Y DE AQUÍ NO SE QUITO
    LoginFormComponent,
    //RegisterFomrComponent,
    RegisterFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
