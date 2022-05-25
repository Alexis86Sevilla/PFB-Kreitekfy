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

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.getArtists();
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
