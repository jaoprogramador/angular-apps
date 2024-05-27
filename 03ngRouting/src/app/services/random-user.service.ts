import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IRandomContact, Results } from '../models/randomUser';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.error(`Error en el backend: ${error.status}. El error es ${error.error}`);
    }
    return throwError(() => new Error('Error en la petición de contacto aleatorio'));
  }

  obtenerUsuarioAleatorio(): Observable<Results> {
    console.log('RandomUserService::obtenerUsuarioAleatorio::INI');
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // para reintentar dos veces y si no, manda error
      catchError(this.handleError)
    );
  }

  obtenerListaRandom10Contacts(n: number): Observable<Results> {
    console.log('RandomUserService::obtenerListaRandom10Contacts::INI');
    const params: HttpParams = new HttpParams().set("results", n.toString());
    console.log('RandomUserService::obtenerListaRandom10Contacts::FIN');
    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), // para reintentar dos veces y si no, manda error
      catchError(this.handleError)

    );
    
  }

  obtenerListaRandom10ContactsSexo(n: number, sexo:string): Observable<Results> {
    let params: HttpParams = new HttpParams().set("results", n.toString());
    if(sexo){
      //params.set("gender",sexo);
      params= params.append("gender",sexo);
    }
    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), // para reintentar dos veces y si no, manda error
      catchError(this.handleError)
    );
  }

  obtenerListaRandomContacts(n: number): Observable<Results[]> {
    const params: HttpParams = new HttpParams().set("results", n.toString());
    return this.http.get<Results[]>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), // para reintentar dos veces y si no, manda error
      catchError(this.handleError)
    );
  }

  obtenerRandomContactsPorGenero(sexo: string): Observable<Results> {
    const params: HttpParams = new HttpParams().set("gender", sexo);
    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), // para reintentar dos veces y si no, manda error
      catchError(this.handleError)
    );
  }
}
