import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/shared/pagination';
import { Album } from '../../album/model/album.model';
import { AlbumService } from '../../album/service/album.service';
import { Artist } from '../../artist/model/artist.model';
import { ArtistService } from '../../artist/service/artist.service';
import { Style } from '../../style/model/style.model';
import { StyleService } from '../../style/service/style.service';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent extends Pagination implements OnInit {

  styleId?: number;
  artistId?: number;
  albumId?:number;
  songId?: number;
  title: string= "";
  songs: Song[] = [];
  styles: Style[] = [];
  artists: Artist[] = [];
  albums: Album[] = [];
  song?: Song; 
  selectedStyle?: Style;
  selectedArtist?: Artist;
  selectedAlbum?: Album; 
  selectedSong?: Song;
  songIdToDelete?: number;

  constructor(private router: ActivatedRoute,
    private songService: SongService, 
    private styleService: StyleService, 
    private artistService: ArtistService, 
    private albumService: AlbumService) {
    super();
  }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get("styleId")) {
      this.styleId = +this.router.snapshot.paramMap.get("styleId")!;
      this.title = "Canciones del estilo " + this.styleId;
    } if (this.router.snapshot.paramMap.get("artistId")) {
      this.artistId = +this.router.snapshot.paramMap.get("artistId")!;
      this.title = "Canciones del artista " + this.artistId;
    }if (this.router.snapshot.paramMap.get("albumId")) {
      this.albumId = +this.router.snapshot.paramMap.get("albumId")!;
      this.title = "Canciones del estilo " + this.albumId;
    }else {
      this.title = "Lista de canciones";
    }
    this.initializeSong();
    this.getAllSongs();
  }

  public nextPage(): void {
    this.page = this.page +1;
    this.getAllSongs();
  }

  public previousPage(): void{
    this.page = this.page -1;
    this.getAllSongs();
  }

  public searchByFilters(): void {
    this.getAllSongs();
  }

  public prepareSongToDelete(songId: number): void {
    this.songIdToDelete = songId;
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

  public songSelected(): void {
    this.song!.styleId = this.selectedSong!.id;
    this.song!.styleName = this.selectedSong!.name;
  }

  public songUnselected(): void {
    this.song!.id = undefined;
    this.song!.name = undefined;
  }

  public deleteSong(): void {
    if (this.songIdToDelete) {
      this.songService.deleteSong(this.songIdToDelete).subscribe({
        next: (data) => {
          this.getAllSongs();
        },
        error: (err) => {this.handleError(err)}
      })
    }
  }

  public insertSong(): void {
    this.songService.insert(this.song!).subscribe({
      next: (songInserted) => {
        console.log("Añadida correctamente");
        console.log(songInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private buildFilters():string | undefined {
    const filters: string[] = [];

    if (this.styleId) {
      filters.push("style.id:EQUAL:" + this.styleId);
    }

    if (this.artistId) {
      filters.push("artist.id:EQUAL:" + this.artistId);
    }

    if (this.albumId) {
      filters.push("album.id:EQUAL:" + this.albumId);
    }

    if (this.songId) {
      filters.push("song.id:EQUAL:" + this.songId);
    }

    if (this.selectedAlbum) {
      filters.push("album.name:EQUAL:" + this.selectedAlbum.name);
    }

    if (this.selectedArtist) {
      filters.push("artist.name:EQUAL:" + this.selectedArtist.name);
    }

    if (this.selectedStyle) {
      filters.push("style.name:EQUAL:" + this.selectedStyle.name);
    }

    if (this.selectedSong) {
      filters.push("name:MATCH:" + this.selectedSong.name);
    }

    if (filters.length > 0) {

      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length - 1);
      return globalFilters;

    } else {
      return undefined;
    }

  }

  private getAllSongs(): void {

    const filters:string | undefined = this.buildFilters();

    this.songService.getAllSongs(this.page, this.size, this.sort, filters).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public getAllSongsFilter(event?: any): void {
    let songSearch: string | undefined;

    if (event?.query) {
      songSearch = event.query;
    }
    this.songService.getAllSongsFilter(songSearch).subscribe({
      next: (songsFiltered) => {
        this.songs = songsFiltered;
      },
      error: (err) => {this.handleError(err);}
    });
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
    this.artistService.getAllArtistsFilter(artistSearch).subscribe({
      next: (artistsFiltered) => {
        this.artists = artistsFiltered;
      },
      error: (err) => {this.handleError(err);}
    });
  }

  public getAllAlbums(event: any): void {

    let albumSearch: string | undefined;

    if (event.query) {
      albumSearch = event.query;

    }
    this.albumService.getAllAlbumsFilter(albumSearch).subscribe({
      next: (albumsFiltered) => {
        this.albums = albumsFiltered;
      },
      error: (err) => {this.handleError(err);}
    });
  }

  public getSongbyId(songId: number): void {

    this.songService.getSongById(songId).subscribe({
      next: (songRequest) => {
        this.song = songRequest;
        this.selectedSong = new Song(songRequest.id!, songRequest.name!, songRequest.duration!, 
          songRequest.dateLaunch!, songRequest.albumId!, songRequest.albumName!, 
          songRequest.artistId!, songRequest.artistName!, songRequest.albumDescription!,
          songRequest.styleId!, songRequest.styleName!)
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private initializeSong(): void {
    this.song = new Song(undefined, "", 0, new Date)  
  }

  private handleError(error: any): void {
    console.log(error);
  }



}
