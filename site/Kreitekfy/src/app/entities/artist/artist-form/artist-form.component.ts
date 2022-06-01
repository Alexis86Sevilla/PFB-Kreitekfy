import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss'],
  providers: [MessageService]
})
export class ArtistFormComponent implements OnInit {

  artistId?: number;

  mode: "NEW" | "UPDATE" = "NEW";

  artist?: Artist;

  constructor(private route: ActivatedRoute, private artistService: ArtistService, private messageService: MessageService) { }

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
        this.successAdd();
      },
      error: (err) => { this.handleError(); }
    })
  }

  public updateArtist(): void {
    this.artistService.update(this.artist!).subscribe({
      next: (artistUpdated) => {
        this.successUpdate();
      },
      error: (err) => { this.handleError(); }
    })
  }

  private getArtist(artistId: number) {
    this.artistService.getArtistById(this.artistId!).subscribe({
      next: (artistRequest) => { this.artist = artistRequest },
      error: (err) => { this.handleError() }
    })
  }

  private initializeArtist(): void {
    this.artist = new Artist(undefined, "");
  }

  private handleError(): void {
    this.errorMessage();
  }

  successUpdate() {
    this.messageService.add({ severity: 'success', summary: 'Artista actualizado', detail: 'Se ha actualizado correctamente' });
  }

  successAdd() {
    this.messageService.add({ severity: 'success', summary: 'Artista añadido', detail: 'Se ha insertado un nuevo artista' });
  }

  errorMessage() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Se ha producido un error. Asegúrate que todos los campos estén rellenos' });
  }

}
