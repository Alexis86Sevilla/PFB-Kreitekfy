import { Component, OnInit } from '@angular/core';
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
        error: (err) => {this.handleError(err)}
      })
    }
  }

  

  private getAlbums(): void {
    this.albumService.getAllAlbums().subscribe({
      next: (albumsRequest) => { this.albums = albumsRequest; },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
