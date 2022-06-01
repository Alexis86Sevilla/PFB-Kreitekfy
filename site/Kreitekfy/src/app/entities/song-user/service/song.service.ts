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
    rating: Rating
  ): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "views/"+ rating.songId + "/" + rating.userId;
    return this.http.patch<Rating>(urlEndpoint, rating);
  }

  public getRatingById(
    songId: number,
    userId: number
  ): Observable<Rating>{
    let urlEndpoint: string = this.baseUri + "ratings/" + songId + "/" + userId; 
    return this.http.get<Rating>(urlEndpoint);
  }


  public getSongsByRating(style?: Style | undefined
    ): Observable<Song[]> {
      let urlEndpoint: string =
        this.baseUri + 'songs/ratings';
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }
  
  public insertRating(
    rating: Rating
  ): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "ratings/"+ rating.songId + "/" + rating.userId;
    return this.http.post<Rating>(urlEndpoint, rating);
  }

  public getViewsById(
    songId: number,
    userId: number
  ): Observable<Views>{
    let urlEndpoint: string = this.baseUri + "views/" + songId + "/" + userId;
    return this.http.get<Views>(urlEndpoint);
  }

  public updateViews(
    songId: number,
    userId: number
  ): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/"+ songId + "/" + userId;
    return this.http.patch<Views>(urlEndpoint, songId);
  }

  public getSongsByVisualizations(style?: Style | undefined
    ): Observable<Song[]> {
      let urlEndpoint: string =
        this.baseUri + 'songs/visualizations';
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }

  public insertViews(
    songId: number,
    userId: number
  ): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/"+ songId + "/" + userId;
    return this.http.post<Views>(urlEndpoint, songId);
  }

  public getAllNewSongs(style?: Style | undefined): Observable<Song[]> {
    let urlEndpoint: string = "http://localhost:8081/kreitekfy/songs?page=0&size=5&sort=dateLaunch,desc";
      if (style) {
        urlEndpoint = urlEndpoint + '?filter=style.id:EQUAL:' + style.id;
      }
      return this.http.get<Song[]>(urlEndpoint);
  }

  public getSongsForYou() {

  }
}
