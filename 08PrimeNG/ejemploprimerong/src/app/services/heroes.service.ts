import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  heroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>('http://localhost:4000/heroes/');
  }

  heroesById(id:string): Observable<Heroes> {
    return this.http.get<Heroes>(`http://localhost:4000/heroes/${id}`);
  }

}
