import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../album/model/album.model';
import { Artist } from '../../artist/model/artist.model';
import { Style } from '../../style/model/style.model';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {

  songId?: number;
  song?: Song;
  styles: Style[] = [];
  songForm?: FormGroup;
  selectedStyle?: Style;
  selectedArtist?: Artist;
  selectedAlbum?: Album;

  constructor(
    private router: ActivatedRoute, 
    private songService: SongService, 
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {

    this.buildForm();
    this.songId = +this.router.snapshot.paramMap.get("songId")!;
    this.getSongById(this.songId!);
  }

  public saveSong(): void {
    const songToSave: Song = this.createFromForm();
    this.insertSong(songToSave);
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

  private insertSong(songToSave: Song): void {
    this.songService.insert(songToSave).subscribe({
      next: (songInserted) => {
        console.log("Insertado correctamente");
        console.log(songInserted);
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
      },
      error: (err) => {this.handleError(err);}
    })
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
      artistId: this.songForm?.get(['artist'])!.value.id,
      artistName: this.songForm?.get(['artist'])!.value.name,
      styleId: this.songForm?.get(['style'])!.value.id,
      styleName: this.songForm?.get(['style'])!.value.name,
      image: this.song!.image      
    };
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

  private handleError(error: any): void {
    console.log(error);
  }
}
