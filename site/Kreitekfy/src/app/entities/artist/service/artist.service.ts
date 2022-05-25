import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public insert(artist: Artist): Observable<Artist> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/artists/";
    return this.http.post<Artist>(urlEndpoint, artist);
  }
}
