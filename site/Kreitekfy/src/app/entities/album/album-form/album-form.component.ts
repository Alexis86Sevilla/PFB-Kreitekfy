import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/album.model';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit {
  albumId?: number;
  
  mode: "NEW" | "UPDATE" = "NEW";

  album?: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

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

  public saveAlbum():void{
    this.insertAlbum();
  }

  public insertAlbum(): void {
    this.albumService.insert(this.album!).subscribe({
      next: (albumInserted) => {
        console.log("Añadido correctamente");
        console.log(albumInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getAlbum(albumId:number){
    this.albumService.getAlbumById(albumId).subscribe({
      next: (albumRequest) => {this.album = albumRequest},
      error: (err) => {this.handleError(err)}
    })
  }

  private initializeAlbum(): void{
    this.album = new Album(undefined, "", "");
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
