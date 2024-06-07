import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavegationComponent } from './components/navegation/navegation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OptInPreloadingStrategy } from './preloading-strategies/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-strategies/network-aware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './preloading-strategies/OnDemandPreloadingStrategy';
//import { AuthFormsModule } from './modules/auth-forms/auth-forms.module';
//import { LoginFormComponent } from './modules/authForms/components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    //LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    //Auth form module
    //AuthFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    //IMPORTANTE:Disponemos las estrategias de precarga
    //para poder ser usadas en el modulo de enrutado
    //OptInPreloadingStrategy
    //NetworkAwarePreloadStrategy,
    OnDemandPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
