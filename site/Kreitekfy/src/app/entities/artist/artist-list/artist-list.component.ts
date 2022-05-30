import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/pagination';
import { Artist } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent extends Pagination implements OnInit {
  artists: Artist[] = [];
  artist?: Artist;
  artistIdToDelete?: number;

  constructor(private artistService: ArtistService) {
    super();
  }

  ngOnInit(): void {
    this.getArtists();
  }

  public prepareArtistToDelete(artistId: number): void {
    this.artistIdToDelete = artistId;
  }

  public deleteArtist(): void {
    if (this.artistIdToDelete) {
      this.artistService.deleteArtist(this.artistIdToDelete).subscribe({
        next: (data) => {
          this.getArtists();
        },
        error: (err) => { this.handleError(err) }
      })
    }
  }

  public insertArtist(): void {
    this.artistService.insert(this.artist!).subscribe({
      next: (artistInserted) => {
        console.log("Añadido correctamente");
        console.log(artistInserted);
      },
      error: (err) => { this.handleError(err); }
    })
  }

  public updateArtist(): void {
    this.artistService.insert(this.artist!).subscribe({
      next: (artistInserted) => {
        console.log("Modificado correctamente");
        console.log(artistInserted);
      },
      error: (err) => { this.handleError(err); }
    })
  }

  private getArtists(): void {
    this.artistService.getAllArtists(this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.artists = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        console.log(this.artists.length)
      },
      error: (err) => { this.handleError(err); }
    })
  }

  public nextPage():void{
    this.page += 1;
    this.getArtists();
  }

  public previousPage():void{
    this.page -= 1;
    this.getArtists();
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
