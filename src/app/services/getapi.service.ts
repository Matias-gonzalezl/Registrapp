import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http: HttpClient) {

   }

   getdata<T>(url: string)
   {
    url = 'http://universities.hipolabs.com/search?country=United+States'
    return this._http.get<T[]>(url) ;

   }
}
