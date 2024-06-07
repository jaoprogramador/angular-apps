import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OptInPreloadingStrategy } from './preloading-strategies/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-strategies/network-aware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './preloading-strategies/OnDemandPreloadingStrategy';

const routes: Routes = [
  //si path ''' redirigir a home
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
   //carga perezosa componente auth
   {
    path: 'auth',
    loadChildren:  () => import ('./modules/pages/auth/auth.module').then(m => m.AuthModule),
    data:{
      preload: true//este modulo se va a precargar bajo la estrategia de OptInPreloadingStrategy
    }
  },
  //carga perezosa componente home
  {
    path: 'home',
    loadChildren:  () => import ('./modules/pages/home/home.module').then(m => m.HomeModule)
  }
  ,
  //carga perezosa componente profile
  {
    path: 'profile',
    loadChildren:  () => import ('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data:{
      preload: true//este modulo se va a precargar bajo la estrategia de OptInPreloadingStrategy
    }

    
  }/*,
  //Siempre el 404 se podrá en el modulo de enrutado principal
  {
    path:'**',
    loadChildren:  () => import ('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule ) ,
    pathMatch: 'full' // Aseguramos que la ruta comodín coincida completamente

  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //Definimos la estrategia de precarga:
      //=====================================
      //1.- Precargar todos los modulos de las rutas -->Evitar carga perezosa
      //preloadingStrategy: PreloadAllModules
      //2.- NO PREGAR NINGUN MODULO---> Forrzar carga perezosa
      //preloadingStrategy: NoPreloading
      //3.- Estrategia personalizada de precarga por opciones en rutas
      //preloadingStrategy: OptInPreloadingStrategy
      //4.- Estrategia personalizada de precarga por conexionesde usuarios a internet
      //preloadingStrategy: NetworkAwarePreloadStrategy
      //5.- Estrategia personalizada de precarga por desencadenador de eventos desde servicio
      preloadingStrategy: OnDemandPreloadingStrategy

    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
