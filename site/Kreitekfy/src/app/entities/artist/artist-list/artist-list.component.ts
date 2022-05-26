import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];
  artistIdToDelete?: number;

  constructor(private artistService: ArtistService) { }

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
        error: (err) => {this.handleError(err)}
      })
    }
  }

  public insertArtist(artistToSave: Artist): void {
    this.artistService.insert(artistToSave).subscribe({
      next: (artistInserted) => {
        console.log("Añadido correctamente");
        console.log(artistInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getArtists(): void {
    this.artistService.getAllArtists().subscribe({
      next: (artistsRequest) => { this.artists = artistsRequest; },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
