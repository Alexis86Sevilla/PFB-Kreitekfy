import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  styleId?: number;
  artistId?: number;
  albumId?:number;
  songs: Song[] = [];
  song?: Song;  
  
  page: number = 0;
  size: number = 25;
  sort: string = "name,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;



  songIdToDelete?: number;

  constructor(private route: ActivatedRoute,
    private songService: SongService) { }

  ngOnInit(): void {
  }

  public nextPage(): void {
    this.page = this.page +1;
    this.getAllItems();
  }

  public previusPage(): void{
    this.page = this.page -1;
    this.getAllItems();
  }

  public searchByFilters(): void {
    this.getAllItems();
  }

  public prepareSongToDelete(songId: number): void {
    this.songIdToDelete = songId;
  }

  public deleteSong(): void {
    if (this.songIdToDelete) {
      this.songService.deleteSong(this.songIdToDelete).subscribe({
        next: (data) => {
          this.getAllItems();
        },
        error: (err) => {this.handleError(err)}
      })
    }
  }

  private buildFilters():string | undefined {
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

  private getAllItems(): void {

    const filters:string | undefined = this.buildFilters();

    this.songService.getAllSongs(this.page, this.size, this.sort, filters).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getSongsByAlbum(): void {

    const filters:string | undefined = this.buildFilters();

    this.songService.getSongsByAlbum(this.song?.albumId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getSongsByStyle(): void {

    const filters:string | undefined = this.buildFilters();

    this.songService.getSongsByStyle(this.song?.styleId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getSongsByArtist(): void {

    const filters:string | undefined = this.buildFilters();

    this.songService.getSongsByArtist(this.song?.artistId!, this.page, this.size, this.sort).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
