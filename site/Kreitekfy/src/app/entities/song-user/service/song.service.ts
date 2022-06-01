import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../../ratings/model/rating.model';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';
import { Views } from '../../views/model/views.model';

@Injectable({
  providedIn: 'root'
})
export class SongUserService {
  baseUri = "http://localhost:8081/kreitekfy/";
  // baseUri = "http://localhost:3003/";

  constructor(private http: HttpClient) { }

  public updateRating(
    songId: number,
    userId: number,
    quantity: number
  ): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "ratings/" + + songId + "/" + userId + "/" + quantity;
    return this.http.patch<Rating>(urlEndpoint, songId);
  }

  public getRatingById(
    songId: number,
    userId: number
  ): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "ratings/" + songId + "/" + userId;
    return this.http.get<Rating>(urlEndpoint);
  }


  public getAllRating(): Observable<Rating[]> {
    let urlEndpoint: string =
      this.baseUri + 'ratings';
    return this.http.get<Rating[]>(urlEndpoint);
  }

  public getFiveSongsByRating(style?: Style | undefined
  ): Observable<Song[]> {
    let urlEndpoint: string =
      this.baseUri + 'songs_ratings';
    if (style) {
      urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
    }
    return this.http.get<Song[]>(urlEndpoint);
  }

  public insertRating(
    songId: number,
    userId: number,
    quantity: number
  ): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "ratings/" + songId + "/" + userId + "/" + quantity;
    return this.http.post<Rating>(urlEndpoint, songId);
  }

  public getViewsById(
    songId: number,
    userId: number
  ): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/" + songId + "/" + userId;
    return this.http.get<Views>(urlEndpoint);
  }

  public updateViews(
    songId: number,
    userId: number
  ): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/" + songId + "/" + userId;
    return this.http.patch<Views>(urlEndpoint, songId);
  }

  public getAllVisualizations(
  ): Observable<Views[]> {
    let urlEndpoint: string =
      this.baseUri + 'views';
    return this.http.get<Views[]>(urlEndpoint);
  }

  public getFiveSongsBylVisualizations(style?: Style | undefined): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + 'songs_views';
    if (style) {
      urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
    }
    return this.http.get<Song[]>(urlEndpoint);
  }

  public insertViews(
    songId: number,
    userId: number
  ): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/" + songId + "/" + userId;
    return this.http.post<Views>(urlEndpoint, songId);
  }

  public getAllNewSongs(style?: Style | undefined): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + "songs?page=0&size=5&sort=dateLaunch,desc";
    if (style) {
      urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
    }
    return this.http.get<Song[]>(urlEndpoint);
  }

  public getSongsForYou(): Observable<Song[]> {
    let urlEndpoint: string = this.baseUri + 'songs_foryou';
    return this.http.get<Song[]>(urlEndpoint);
  }
}
