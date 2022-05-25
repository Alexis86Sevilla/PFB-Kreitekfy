import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public insert(album: Album): Observable<Album> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/albums/";
    return this.http.post<Album>(urlEndpoint, album);
  }

  public getAllAlbums(partialName?: string): Observable<Album[]> {
    
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/albums/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Album[]>(urlEndpoint);
  }
}
