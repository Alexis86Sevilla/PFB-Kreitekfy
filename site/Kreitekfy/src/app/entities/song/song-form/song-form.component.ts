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

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
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

  constructor(
    private router: ActivatedRoute, 
    private songService: SongService, 
    private styleService: StyleService, 
    private artistService: ArtistService, 
    private albumService: AlbumService,
    private fb: FormBuilder
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
      error: (err) => {this.handleError(err);}
    });
  }

  public getAllArtists(event?: any): void {
    let artistSearch: string | undefined;

    if (event?.query) {
      artistSearch = event.query;
    }
    this.artistService.getAllArtists(artistSearch).subscribe({
      next: (artistsFiltered) => {
        this.artists = artistsFiltered;
      },
      error: (err) => {this.handleError(err);}
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
      error: (err) => {this.handleError(err);}
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
        console.log("Insertado correctamente");
        console.log(songInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }
  
  private updateSong(): void {
    this.songService.update(this.song!).subscribe({
      next: (songUpdated) => {
        console.log("Modificado correctamente");
        console.log(songUpdated);
      },
      error: (err) => {this.handleError(err);}
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
      error: (err) => {this.handleError(err);}
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

  private buildForm():void {
    this.songForm = this.fb.group({
      id: [{value: undefined, disabled: true}],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    })
  }

  private updateForm(song: Song): void {
    this.songForm?.patchValue({
      id: song.id, 
      name: song.name,
      duration: song.duration,
      dateLaunch: song.dateLaunch,
      valoration: song.valoration,
      visualizations: song.visualizations,
      Album: new Album(song.albumId!, song.albumName!, song.albumDescription!),
      Artist: new Artist(song.artistId!, song.artistName!),
      Style: new Style(song.styleId!, song.styleName!)
    });
  }

  private createFromForm(): Song {
    return {
      ...this.song,
      id: this.songForm?.get(['id'])!.value,
      name: this.songForm?.get(['name'])!.value,
      duration: this.songForm?.get(['duration'])!.value,
      dateLaunch: this.songForm?.get(['dateLaunch'])!.value,
      valoration: this.songForm?.get(['valoration'])!.value,
      visualizations: this.songForm?.get(['visualizations'])!.value,
      albumId: this.songForm?.get(['album'])!.value.id,
      albumName: this.songForm?.get(['album'])!.value.name,
      albumDescription: this.songForm?.get(['album'])!.value.description,
      artistId: this.songForm?.get(['artist'])!.value.id,
      artistName: this.songForm?.get(['artist'])!.value.name,
      styleId: this.songForm?.get(['style'])!.value.id,
      styleName: this.songForm?.get(['style'])!.value.name,
      image: this.song!.image      
    };
  }

  private initializeSong(): void {
    this.song = new Song(undefined, "", 0, new Date, 0, 0);
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
