import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Album } from '../model/album.model';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  album?: Album;

  page: number = 0;
  size: number = 5;
  sort: string = "name,asc";
  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  nameFilter?: string

  albumIdToDelete?: number;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  public prepareAlbumToDelete(albumId: number): void {
    this.albumIdToDelete = albumId;
  }

  public deleteAlbum(): void {
    if (this.albumIdToDelete) {
      this.albumService.deleteAlbum(this.albumIdToDelete).subscribe({
        next: (data) => {
          this.getAlbums();
        },
        error: (err) => { this.handleError(err) }
      })
    }
  }
  
  private getAlbums(): void {
    this.albumService.getAllAlbums(this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.albums = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        console.log(this.first)

      },
      error: (err) => { this.handleError(err); }
    })
  }

  public nextPage():void{
    this.page += 1;
    this.getAlbums();
  }

  public previousPage():void{
    this.page -= 1;
    this.getAlbums();
  }

  private handleError(error: any): void {
    console.log(error);
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];

    if (this.nameFilter) {
      filters.push("name:MATCH" + this.nameFilter);
    }

    if (filters.length > 0) {
      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ","
      }
      globalFilters = globalFilters.substring(0, globalFilters.length - 1);
      return globalFilters;
    } else {
      return undefined;
    }
  }

  public searchByFilters(): void {
    const filters: string | undefined = this.buildFilters();
  }

}
