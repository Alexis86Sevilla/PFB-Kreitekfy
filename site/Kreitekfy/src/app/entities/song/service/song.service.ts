import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  //baseUri = "http://localhost:8081/kreitekfy/";
  baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public insert(song: Song): Observable<Song> {
    let urlEndpoint: string = this.baseUri + "songs/";
    return this.http.post<Song>(urlEndpoint, song);
  }

  public update(song: Song): Observable<Song> {
    let urlEndpoint: string = this.baseUri + "songs/";
    return this.http.patch<Song>(urlEndpoint, song);
  }

  public deleteSong(songIdToDelete: number): Observable<any> {
    let urlEndpoint: string = this.baseUri + "songs/" + songIdToDelete;
    return this.http.delete<any>(urlEndpoint);
  }

  public getSongById(songId: number): Observable<Song> {
    let urlEndpoint: string = this.baseUri + "songs/" + songId;
    return this.http.get<Song>(urlEndpoint);
  }

  public getAllSongs(page: number, size: number, sort: string, filters?: string): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + "songs?page=" + page + "&size=" + size + "&sort=" + sort;
    if (filters) {
      urlEndpoint = urlEndpoint + "&filter=" + filters;
    }
    return this.http.get<Song[]>(urlEndpoint);
  }

  public addValorationToOneSong() {

  }

  public addVisualizationToOneSong() {

  }

  public getSongsByValoration() {

  }

  public getSongsByVisualizations() {

  }

  public getSongsForYou() {

  }

}
