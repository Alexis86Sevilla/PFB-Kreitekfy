import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Style } from '../model/style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

   baseUri = "http://localhost:8080/kreitekfy/";
   //baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public insert(style: Style): Observable<Style> {
    let urlEndpoint: string = this.baseUri + "styles/";
    return this.http.post<Style>(urlEndpoint, style);
  }

  public update(style: Style): Observable<Style> {
    let urlEndpoint: string = this.baseUri + "styles/";
    return this.http.patch<Style>(urlEndpoint, style);
  }

  public getStyles(page: number, size: number, sort: string): Observable<Style[]> {
    let urlEndPoint: string = this.baseUri + "styles?page=" + page + "&size=" + size + "&sort=" + sort;

    return this.http.get<Style[]>(urlEndPoint);
  }


  public getAllStyles(partialName?: string): Observable<Style[]> {
    
    let urlEndpoint: string = this.baseUri + "styles/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Style[]>(urlEndpoint);
  }

  public deleteStyle(styleIdToDelete: number): Observable<any> {
    let urlEndpoint: string = this.baseUri + "styles/" + styleIdToDelete;
    return this.http.delete<any>(urlEndpoint);
  }

  public getStyleById(styleId: number): Observable<Style> {
    let urlEndpoint: string = this.baseUri + "styles/" + styleId;
    return this.http.get<Style>(urlEndpoint);
  }
}
