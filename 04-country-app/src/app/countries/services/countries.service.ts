import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap,map, catchError } from 'rxjs/operators';

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null))
    );

  }

  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(
        catchError( error => {
          console.log(error);
          return of([])
        })
    );

  }
  searchName(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(
        catchError( error => {
          console.log(error);
          return of([])
        })
    );

  }

  searchRegion(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(
        catchError( () => of([]))
    );

  }

}
