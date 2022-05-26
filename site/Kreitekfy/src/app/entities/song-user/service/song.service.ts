import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../song/model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  //baseUri = "http://localhost:8081/kreitekfy/";
  baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public getSongsByStyle(styleId: number, page: number, size: number, sort: string): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + "songs/" + styleId + "?page=" + page + "&size=" + size + "&sort=" + sort;
    return this.http.get<Song[]>(urlEndpoint);
  }

  public getSongsByArtist(artistId: number, page: number, size: number, sort: string): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + "songs/" + artistId + "?page=" + page + "&size=" + size + "&sort=" + sort;
    return this.http.get<Song[]>(urlEndpoint);
  }

  public getSongsByAlbum(albumId: number, page: number, size: number, sort: string): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + "songs/" + albumId + "?page=" + page + "&size=" + size + "&sort=" + sort;
    return this.http.get<Song[]>(urlEndpoint);
  }
}
