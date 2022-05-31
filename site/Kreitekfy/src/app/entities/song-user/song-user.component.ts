import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/pagination';
import { Song } from '../song/model/song.model';
import { SongService } from './service/song.service';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.scss']
})
export class SongUserComponent extends Pagination implements OnInit {

  songs: Song[] = [];
  song?: Song;  
  styleId?: number;
  artistId?: number;
  albumId?:number;

 
  constructor(private songService: SongService) {
    super();
  }

  ngOnInit(): void {
  }

  private handleError(error: any): void {
    console.log(error);
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];

    if (this.styleId) {
      filters.push("style.id:EQUAL:" + this.styleId);
    }

    if (this.artistId) {
      filters.push("artist.id:EQUAL:" + this.artistId);
    }

    if (this.albumId) {
      filters.push("album.id:EQUAL:" + this.albumId);
    }

    if (filters.length > 0) {

      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length - 1);
      return globalFilters;

    } else {
      return undefined;
    }

  }

}
