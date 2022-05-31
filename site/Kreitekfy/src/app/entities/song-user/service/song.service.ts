import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseUri = "http://localhost:8081/kreitekfy/";
 // baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public getAllNewSongs(): Observable<Song[]> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/songs_filter?page=0&size=5&sort=dateLaunch,desc";
    return this.http.get<Song[]>(urlEndpoint);
  }

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

  public addValorationToOneSong() {

  }

  public getSongsByValoration(style: Style | undefined
    ): Observable<Song[]> {
      let urlEndpoint: string =
        this.baseUri + 'songs/valorations';
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }

  public getValorationById(
    songId: string,
    userId: string
  ){
    //TODO
  }

  public addVisualizationToOneSong() {

  }

  public getSongsByVisualizations(
    style: Style | undefined
    ): Observable<Song[]> {
      let urlEndpoint: string =
        this.baseUri + 'songs/visualizations';
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }

  public getNewSongs(
    style: Style | undefined
    ): Observable<Song[]> {
      let urlEndpoint: string =
        this.baseUri + 'songs/news';
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }

  public getSongsForYou() {

  }
}
