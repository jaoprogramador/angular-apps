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
import { MaterialModule } from './modules/material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPagesComponent } from './pages/tasks-pages/tasks-pages.component';
import { KabanTasksComponent } from './components/kaban-tasks/kaban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './components/task/task.component';
import { InfoComponent } from './components/info/info.component';
import {MatTabsModule} from '@angular/material/tabs';


import { LifeCycleDirective } from './directives/life-cycle.directive';
import { MouseOverDirective } from './directives/mouse-over.directive';
import { ContactsTableComponent } from './pages/contacts-table/contacts-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




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
    FormularioValidadoComponent,
    LoginFormComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavigationComponent,
    DashboardComponent,
    TasksPagesComponent,
    KabanTasksComponent,
    TaskComponent,
    InfoComponent,    
    LifeCycleDirective, 
    MouseOverDirective//, 
    //ContactsTableComponent    
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
    MatFormFieldModule,
    //BrowserAnimationModule
    //añadimos los formularios reactivos
    ReactiveFormsModule,
    //modulo personalizado de angular material
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    //MatIconModule,
    MatListModule,
    DragDropModule,
    MatTabsModule,
    MatTableModule,
    //MatPaginator,
    MatPaginatorModule,
    MatSort

    
    
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
