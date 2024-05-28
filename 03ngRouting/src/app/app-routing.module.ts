import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPagesComponent } from './pages/tasks-pages/tasks-pages.component';

const routes: Routes = [
  {//cuando vamos a la raiz del proyecto redireccioname a home
    path: '',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  
  {
    path: 'login',
    component: LoginPageComponent
  },  
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],//solo accesible si estamos autenticados,
    children:[
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate:[AuthGuard]
    
      },
      {
        path: 'contacts/:id',
        component: ContactDetailPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'random',
        component: RandomContactPageComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'tasks',
        component: TasksPagesComponent,
        canActivate:[AuthGuard]
    
      },
      {
        path: '',
        component: HomePageComponent/*,
        children:[
          {
            path: 'hijo',
            component: HomePageComponent
          }
          
        ],*/,
        canActivate:[AuthGuard]
      }
    ]
  },
  
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
