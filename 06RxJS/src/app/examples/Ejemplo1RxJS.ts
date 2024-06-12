import { fromEvent, Observable, of, Subscription, interval, take, zip, map, zipAll } from 'rxjs';


//of(true,2, 4, 'Juan');

//***************EJEMPLO 1 ****************/

//* Creamos observables
//creamos un observable que emite 2 valores:
//const observable = of ('Hola','Juantxu', 42);

//Creacion de observador
/*const observer = {
    next: (valor: string | number) => console.log(`${valor}`),
    error: (error: any) => console.log(`Error: ${error}`),
    complete: () => console.info(`Hemos terminado`)
}
*/
//Ejecución del observable => imprescindible una suscripción
//observable.subscribe(observer);


//***************EJEMPLO 2 ****************/
// Creacion de una función que devuelva un Observable personalizada
//recibe una colleccion de argumentos
/*export const  miObservableDeStrings = (...args: any[]): Observable<string|number> => {
    return new Observable((observer) => {
        if(args.length > 3){
            observer.error('Tiene demasiados argumentos');
        }
        args.forEach((arg: string) => observer.next(arg));//emitimos todos los valores
        observer.complete(); //completamos el observer
    });
};*/

// Uso del observable personalizado
// miObservableDeStrings('valor1', 'valor2', 'valor2');

 //***************EJEMPLO 3 observable a partir de eventos****************/
 //Emision de valores a partir de eventos en el DOM
 //Para ello usuaremos "fromEvent" de rxjs

 //1.- creamos el observable a a partir de fromEvent
 //const observableClicks = fromEvent(document, 'click');

 //2 creacion de observer del observable
 /*observableClicks.subscribe({
    next: (valor: Event) => console.log(`Ha ocurrido un evento ${valor.type}`),
    error: (error: any) => console.log(`Ha ocurrido un Error: ${error}`),
    complete: () => console.info(`Terminado observable que escucha clicks`)

 })*/

//***************EJEMPLO 4 observable a partir de intervalo ****************/
//1.- definimos el observable a partir del intervalo que emite cada 2 segundos
const observable = interval(2000);
//2 creamos el observer que consume los valores, que solo se quede con los 3 primeros
observable.pipe(
    take(3)
).subscribe({
    next: (valor: number) => console.log(`Ha ocurrido un evento ${valor}`),
    error: (error: any) => console.log(`Ha ocurrido un Error: ${error}`),
    complete: () => console.info(`Terminado observable que escucha clicks`)
});


//

//******************EJEMPLO 5 uso de operadores zip y map*/


const timer$ = interval(1000);
const pieces$ : Observable<string> = of('', '♞', '', '♞', '♘', '♞');
const columns$ : Observable<string> = of('e', 'c', 'g', 'd', 'e', 'f');
const rows$ : Observable<string> = of('4', '6', '4', '4', '2', '3');


//******************EJEMPLO 6 agrupacion de valores*/