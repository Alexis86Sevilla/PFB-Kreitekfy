import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Style } from '../model/style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(private http: HttpClient) { }

  public insert(style: Style): Observable<Style> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/styles/";
    return this.http.post<Style>(urlEndpoint, style);
  }
}
