import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
//importamos el modulo
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //importamos nuestro modulo personalizado
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
