import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  baseUri = "http://localhost:8081/kreitekfy/";
  //baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public insert(artist: Artist): Observable<Artist> {
    let urlEndpoint: string = this.baseUri + "artists/";
    return this.http.post<Artist>(urlEndpoint, artist);
  }

  public update(artist: Artist): Observable<Artist> {
    let urlEndpoint: string = this.baseUri + "artists/";
    return this.http.patch<Artist>(urlEndpoint, artist);
  }

  public getAllArtists(page: number, size: number, sort: string): Observable<Artist[]> {
    let urlEndPoint: string = this.baseUri + "artists?page=" + page + "&size=" + size + "&sort=" + sort;

    return this.http.get<Artist[]>(urlEndPoint);
  }


  public getAllArtistsFilter(partialName?: string): Observable<Artist[]> {
    
    let urlEndpoint: string = this.baseUri + "artists/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Artist[]>(urlEndpoint);
  }

  public deleteArtist(artistIdToDelete: number): Observable<any> {
    let urlEndpoint: string = this.baseUri + "artists/" + artistIdToDelete;
    return this.http.delete<any>(urlEndpoint);
  }

  public getArtistById(artistId: number): Observable<Artist> {
    let urlEndpoint: string = this.baseUri + "artists/" + artistId;
    return this.http.get<Artist>(urlEndpoint);
  }
}
