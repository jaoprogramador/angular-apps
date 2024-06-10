import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Navegation1Component } from './components/navegation1/navegation1.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
//listamos providers de forma compartida
const providers: []=[];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Navegation1Component,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers ,//sería lo mismo que poner providers: providers
  bootstrap: [AppComponent]
})
export class AppModule { }

//Creamos un modulo compartido que se usa en el AppRoutingModule de App0
//La idea es compartir este modulo de manera controlada con otras aplicaciones que lo
//necesiten.
@NgModule({})
export class App1ShareModule{
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
