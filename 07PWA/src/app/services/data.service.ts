import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  //obtener un chiste aleatorio con un api
  /**
   * @returns (Observable<any></any>) JSON con chiste de ChuckNorris aleatorio
   */
  obternerChisteAleatorio(){
    return this._http.get('https://api.chucknorris.io/jokes/random');
  }
  
}
