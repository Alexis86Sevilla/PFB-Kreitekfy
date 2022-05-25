import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  public insert(song: Song): Observable<Song> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/songs/";
    return this.http.post<Song>(urlEndpoint, song);
  }

  public update(song: Song): Observable<Song> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/songs/";
    return this.http.patch<Song>(urlEndpoint, song);
  }
}
