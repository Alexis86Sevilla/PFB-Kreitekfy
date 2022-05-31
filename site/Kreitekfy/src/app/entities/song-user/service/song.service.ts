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

  public updateRating(rating: Rating): Observable<Rating> {
    let urlEndpoint: string = this.baseUri + "rating/";
    return this.http.patch<Views>(urlEndpoint, rating);
  }


  public getSongsByValoration(style?: Style | undefined
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

  public updateViews(views: Views): Observable<Views> {
    let urlEndpoint: string = this.baseUri + "views/";
    return this.http.patch<Views>(urlEndpoint, views);
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
