# 05ngWorkpsace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## INFO del proyecto
Ejemplo de como crear un workspace. Cuando hacemos un ng new creamos un proyecto nuevo, pero podríamos querer un workspace con varios proyectos y admistrar los accesos a algunos proyectos según perfiles. Vamos a crear un proyecto de proyectos que sería como un hub.

app0
    ---->app1
        --->home 1
        --->settings 1
    ---->app2
        --->home 2
        --->settings 2

## COMANDOS para WORKSPACE
========================
	ng new 05ngWorkpsace --create-aplication false
crear aplicacion dentro workspace                            --ng new 03ngRouting --no-standalone --routing --ssr=false
	ng g application app0
crear aplicacion con sistema de enrutado propio	
	ng g application app0 --routing true   ---> tampoco me crea el routing ni el module
	ng g application app0 --no-standalone --routing --ssr=false   ------------> esta linea si me crea el module y el touting
	ng g application app1 --no-standalone --routing --ssr=false
	ng g application app2 --no-standalone --routing --style scss--ssr=false   ----> con este comando le diríamos que el stylo es scs y ahorraría la pregunta
ponemos angular material en app0
	ng add @angular/material --project app0
	
Creamos un menú de navegación al primer proyecto app0
	ng g @angular/material:navigation components/navegation --project app0
creamos un componente---------------------->LEPONEMOS EL PROJECTO XQ SI NO LO HARÍA EN app0 xq es el de por defecto
	ng g c pages/HomePage --project app1
ahora creamos en el proyecto1 un panel de navegacion propio de material
	ng g @angular/material:navigation components/navegation1 --project app1
creamos un componente Settings---------------------->LEPONEMOS EL PROJECTO XQ SI NO LO HARÍA EN app0 xq es el de por defecto
	ng g c pages/SettingsPage --project app1
arrancamos 
	npm run start:app0
REPLICAMOS ESTOS PASOS PARA EL APP2
	ng g c pages/HomePage --project app2
	ng g c pages/SettingsPage --project app2
	ng g @angular/material:navigation components/navegation2 --project app2
Instalamos npx serve
	npm install --save-dev serve
Para empaquetar para PROD
	npm run serve:prod

