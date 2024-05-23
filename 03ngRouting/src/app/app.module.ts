import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
//modulos de angular material
import {MatFormFieldModule} from  '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,    
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent    
    //AuthService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imortamos nuestro modulo personalizado
    FormsModule,
    //importamos el modulo de httpClientModule para hacer peticiones http
    HttpClientModule,
    //importamos el modulo deReactive forms module para trabajar con formularios reactivos
    ReactiveFormsModule,
    //impoortamos los modulos de angular materials  para los inputs del form
    MatFormFieldModule
    //BrowserAnimationModule
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
