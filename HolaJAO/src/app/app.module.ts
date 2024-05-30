import { NgModule,CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
//importamos el modulong
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
//import { LoginComponent } from './components/forms/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
//LOCALE PARA PIPES
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
registerLocaleData(localeES);//registramos el LOCALE_ID de ES

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    //LoginComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    EjemploAnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //importamos nuestro modulo personalizado
    ListsModule,
    //importamos httpClienteModule para poder hacer llamadas http
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    //importamos el modulo de animaciones
    BrowserAnimationsModule
  ],
  providers: [
    //registramos el locale para que salgan en español
    {
      provide: LOCALE_ID, useValue:'es'
      //provideAnimationsAsync(), 
    }
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
