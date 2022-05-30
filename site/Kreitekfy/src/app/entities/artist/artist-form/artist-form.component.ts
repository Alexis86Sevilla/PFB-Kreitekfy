import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

  artistId?: number;
  
  mode: "NEW" | "UPDATE" = "NEW";

  artist?: Artist;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("artistId") ?? "new"
    if (entryParam !== "new") {
      this.artistId = +this.route.snapshot.paramMap.get("artistId")!;
      this.mode = "UPDATE"
      this.getArtist(this.artistId);
    } else {
      this.mode = "NEW"
      this.initializeArtist();
    }
  }

  public saveArtist(): void {
    if (this.mode === "NEW") {
      this.insertArtist();
    }

    if (this.mode === "UPDATE") {
      this.updateArtist();
    }
  }

  public insertArtist(): void {
    this.artistService.insert(this.artist!).subscribe({
      next: (artistInserted) => {
        console.log("Añadido correctamente");
        console.log(artistInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public updateArtist(): void {
    this.artistService.update(this.artist!).subscribe({
      next: (artistUpdated) => {
        console.log("Añadido correctamente");
        console.log(artistUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getArtist(artistId:number){
    this.artistService.getArtistById(this.artistId!).subscribe({
      next: (artistRequest) => {this.artist = artistRequest},
      error: (err) => {this.handleError(err)}
    })
  }

  private initializeArtist(): void{
    this.artist = new Artist(undefined, "");
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
