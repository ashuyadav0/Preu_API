import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreusService {

  private baseUrl: string = 'http://161.97.116.226:3000/api/productos';
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
