import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../album/model/album.model';
import { AlbumService } from '../../album/service/album.service';
import { Artist } from '../../artist/model/artist.model';
import { ArtistService } from '../../artist/service/artist.service';
import { Style } from '../../style/model/style.model';
import { StyleService } from '../../style/service/style.service';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
  providers: [MessageService]
})
export class SongFormComponent implements OnInit {

  mode: "NEW" | "UPDATE" = "NEW";
  songId?: number;
  song?: Song;
  styles: Style[] = [];
  artists: Artist[] = [];
  albums: Album[] = [];
  songForm?: FormGroup;
  selectedStyle?: Style;
  selectedArtist?: Artist;
  selectedAlbum?: Album;

  todayDate = '2022-12-12';

  constructor(
    private router: ActivatedRoute, 
    private songService: SongService, 
    private styleService: StyleService, 
    private artistService: ArtistService, 
    private albumService: AlbumService,
    private fb: FormBuilder,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    const entryParam: string = this.router.snapshot.paramMap.get("songId") ?? "new";
    if (entryParam != "new") {
      this.songId = +this.router.snapshot.paramMap.get("songId")!;
      this.mode = "UPDATE";
      this.getSongById(this.songId!);
    } else {
      this.mode = "NEW";
      this.initializeSong();
    }
  }

  public getAllStyles(event?: any): void {
    let styleSearch: string | undefined;

    if (event?.query) {
      styleSearch = event.query;
    }
    this.styleService.getAllStyles(styleSearch).subscribe({
      next: (stylesFiltered) => {
        this.styles = stylesFiltered;
      },
      error: (err) => {this.handleError();}
    });
  }

  public getAllArtists(event?: any): void {
    let artistSearch: string | undefined;

    if (event?.query) {
      artistSearch = event.query;
    }
    this.artistService.getAllArtistsFilter(artistSearch).subscribe({
      next: (artistsFiltered) => {
        this.artists = artistsFiltered;
      },
      error: (err) => {this.handleError();}
    });
  }

  public getAllAlbums(event?: any): void {
    let albumSearch: string | undefined;

    if (event?.query) {
      albumSearch = event.query;
    }
    this.albumService.getAllAlbumsFilter(albumSearch).subscribe({
      next: (albumsFiltered) => {
        this.albums = albumsFiltered;
      },
      error: (err) => {this.handleError();}
    });
  }

  public saveSong(): void {
    if (this.mode === "NEW") {
      this.insertSong();
    }

    if (this.mode === "UPDATE") {
      this.updateSong();
      
    }
  }

  public styleSelected(): void {
    this.song!.styleId = this.selectedStyle!.id;
    this.song!.styleName = this.selectedStyle!.name;
  }

  public styleUnselected(): void {
    this.song!.styleId = undefined;
    this.song!.styleName = undefined;
  }

  public artistSelected(): void {
    this.song!.artistId = this.selectedArtist!.id;
    this.song!.artistName = this.selectedArtist!.name;
  }

  public artistUnselected(): void {
    this.song!.artistId = undefined;
    this.song!.artistName = undefined;
  }

  public albumSelected(): void {
    this.song!.albumId = this.selectedAlbum!.id;
    this.song!.albumName = this.selectedAlbum!.name;
  }

  public albumUnselected(): void {
    this.song!.albumId = undefined;
    this.song!.albumName = undefined;
  }

  private insertSong(): void {
    this.songService.insert(this.song!).subscribe({
      next: (songInserted) => {
        this.successAdd();
      },
      error: (err) => {this.handleError();}
    })
  }
  
  private updateSong(): void {
    this.songService.update(this.song!).subscribe({
      next: (songUpdated) => {
        this.successUpdate();
      },
      error: (err) => {this.handleError();}
    })
  }

  public includeImageInSong(event: any): void {
    const inputFile = event.target as HTMLInputElement;
    const file: File | null = inputFile.files?.item(0) ?? null;

    this.readFileAsString(file!).then(
      (result) => {
        const imageType: string = this.getImageType(result);
        console.log(imageType);
        const imageBase64: string = this.getImageBase64(result);
        console.log(imageBase64);

        this.song!.image = imageBase64;

      },
      (error) => {
        console.log("No se pudo cargar la imagen")
      })
  }

  private getSongById(songId: number): void {
    this.songService.getSongById(songId).subscribe({
      next: (songRequest) => {
        this.song = songRequest;
        this.updateForm(songRequest);
        this.selectedAlbum = new Album(songRequest.albumId!, songRequest.albumName!, songRequest.albumDescription!);
        this.selectedArtist = new Artist(songRequest.artistId!, songRequest.artistName!);
        this.selectedStyle = new Style(songRequest.styleId!, songRequest.styleName!);
      },
      error: (err) => {this.handleError();}
    })
  }
   
  private getImageType(imageString: string): string{
    const imageStringParts: string[] = imageString.split(",");
    if (imageStringParts.length == 2) {
      return imageStringParts[0];
    } else {
      return"";
    }
  }

  private getImageBase64(imageString: string): string{
    const imageStringParts: string[] = imageString.split(",");
    if (imageStringParts.length == 2) {
      return imageStringParts[1];
    } else {
      return"";
    }
  }

  private readFileAsString(file: File) {
    return new Promise<string>(function(resolve, reject){
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        resolve(this.result as string);
      }
    }) 
  }

  private updateForm(song: Song): void {
    this.songForm?.patchValue({
      id: song.id, 
      name: song.name,
      duration: song.duration,
      dateLaunch: song.dateLaunch,
      Album: new Album(song.albumId!, song.albumName!, song.albumDescription!),
      Artist: new Artist(song.artistId!, song.artistName!),
      Style: new Style(song.styleId!, song.styleName!)
    });
  }

  private initializeSong(): void {
    this.song = new Song(undefined, "", 0, new Date);
  }

  private handleError(): void {
    this.errorMessage();
  }

  successUpdate() {
    this.messageService.add({ severity: 'success', summary: 'Canción actualizada', detail: 'Se ha actualizado correctamente' });
  }

  successAdd() {
    this.messageService.add({ severity: 'success', summary: 'Canción añadida', detail: 'Se ha añadido una nueva canción' });
  }

  errorMessage() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Se ha producido un error. Asegúrate que todos los campos estén rellenos' });
  }
}
