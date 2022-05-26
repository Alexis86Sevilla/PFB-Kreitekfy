import { Component, OnInit } from '@angular/core';
import { Song } from '../song/model/song.model';
import { SongService } from './service/song.service';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.scss']
})
export class SongUserComponent implements OnInit {

  songs: Song[] = [];
  song?: Song;  
  styleId?: number;
  artistId?: number;
  albumId?:number;

  page: number = 0;
  size: number = 25;
  sort: string = "name,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  private getSongsByAlbum(): void {

    const filters: string | undefined = this.buildFilters();

    this.songService.getSongsByAlbum(this.song?.albumId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.songs = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => { this.handleError(err); }
    })
  }

  private getSongsByStyle(): void {

    const filters: string | undefined = this.buildFilters();

    this.songService.getSongsByStyle(this.song?.styleId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.songs = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => { this.handleError(err); }
    })
  }

  private getSongsByArtist(): void {

    const filters: string | undefined = this.buildFilters();

    this.songService.getSongsByArtist(this.song?.artistId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.songs = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => { this.handleError(err); }
    })
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
