
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getApodData(selectedDate:string): Observable<any> {
    let lista = ["plm","hlp"]
    let lista2 = [23,44]
    let person = {
      "nume":"george",
      "oras":"beius"
    }
    let person2 = {
      "nume":"alex",
      "oras":"beius"
    }
    let listaobj = [{
      "nume":"Pilu",
      "oras":"beius"
    },
    person,person2
  ]
    let url = `https://api.nasa.gov/planetary/apod?api_key=kDpedE7sSh9mqCfHoegYTYBCd1l5lTlCRTu4V2AM&date=${selectedDate}`;
    return this.http.get(url);
  }
}
