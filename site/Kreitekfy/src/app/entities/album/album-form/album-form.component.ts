import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Album } from '../model/album.model';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
  providers: [MessageService]
})
export class AlbumFormComponent implements OnInit {
  albumId?: number;

  mode: "NEW" | "UPDATE" = "NEW";

  album?: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private messageService: MessageService) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("albumId") ?? "new"
    if (entryParam !== "new") {
      this.albumId = +this.route.snapshot.paramMap.get("albumId")!;
      this.mode = "UPDATE"
      this.getAlbum(this.albumId);
    } else {
      this.mode = "NEW"
      this.initializeAlbum();
    }
  }

  public saveAlbum(): void {
    if (this.mode === "NEW") {
      this.insertAlbum();
      this.successAdd();
    }

    if (this.mode === "UPDATE") {
      this.updateAlbum();
      this.successUpdate();
    }
  }

  public insertAlbum(): void {
    this.albumService.insert(this.album!).subscribe({
      next: (albumInserted) => {
        this.successAdd();
      },
      error: (err) => { this.handleError(); }
    })
  }

  public updateAlbum(): void {
    this.albumService.update(this.album!).subscribe({
      next: (albumUpdated) => {
        this.successUpdate();
      },
      error: (err) => { this.handleError(); }
    })
  }

  private getAlbum(albumId: number) {
    this.albumService.getAlbumById(albumId).subscribe({
      next: (albumRequest) => { this.album = albumRequest },
      error: (err) => { this.handleError() }
    })
  }

  private initializeAlbum(): void {
    this.album = new Album(undefined, "", "");
  }

  private handleError(): void {
    this.errorMessage();
  }

  successUpdate() {
    this.messageService.add({ severity: 'success', summary: 'Album actualizado', detail: 'Se ha actualizado correctamente' });
  }

  successAdd() {
    this.messageService.add({ severity: 'success', summary: 'Album añadido', detail: 'Se ha insertado un nuevo album' });
  }

  errorMessage() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Se ha producido un error. Asegúrate que todos los campos estén rellenos' });
  }

}
