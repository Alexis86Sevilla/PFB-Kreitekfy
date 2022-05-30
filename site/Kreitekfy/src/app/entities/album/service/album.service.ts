import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  //baseUri = "http://localhost:8081/kreitekfy/";
  baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public insert(album: Album): Observable<Album> {
    let urlEndpoint: string = this.baseUri + "albums/";
    return this.http.post<Album>(urlEndpoint, album);
  }

  public update(album: Album): Observable<Album> {
    let urlEndpoint: string = this.baseUri + "albums/";
    return this.http.patch<Album>(urlEndpoint, album);
  }

  public getAllAlbums(page: number, size: number, sort: string): Observable<Album[]> {
    let urlEndPoint: string = this.baseUri + "albums?page=" + page + "&size=" + size + "&sort=" + sort;

    return this.http.get<Album[]>(urlEndPoint);
  }

  public getAllAlbumsFilter(partialName?: string): Observable<Album[]> {
    
    let urlEndpoint: string = this.baseUri + "albums/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Album[]>(urlEndpoint);
  }

  public deleteAlbum(albumIdToDelete: number): Observable<any> {
    let urlEndpoint: string = this.baseUri + "albums/" + albumIdToDelete;
    return this.http.delete<any>(urlEndpoint);
  }

  public getAlbumById(albumId: number): Observable<Album> {
    let urlEndpoint: string = this.baseUri + "albums/" + albumId;
    return this.http.get<Album>(urlEndpoint);
  }

}
