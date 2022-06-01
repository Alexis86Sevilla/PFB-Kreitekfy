import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';
import { Views } from '../../views/model/views.model';
import { SongUserService } from '../service/song.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  songs: Song[] =[];
  style?: Style;
  selectedStyle?: Style;
  styleId?: number;
  

  constructor(private songUserService: SongUserService) { }

  ngOnInit(): void {
    this.getAllViews();
  }

  private buildFilters():string | undefined {
    const filters: string[] = [];

    if (this.styleId) {
      filters.push("style.id:EQUAL:" + this.styleId);
    }

    if (this.selectedStyle) {
      filters.push("style.name:EQUAL:" + this.selectedStyle.name);
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

  getAllViews(): void {
    const filters:string | undefined = this.buildFilters();
    
    this.songUserService.getAllVisualizations().subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
      },
      error: (err) => {this.handleError(err);}
    })
  }

  getFiveSongsByViews(): void {
    const filters:string | undefined = this.buildFilters();
    
    this.songUserService.getFiveSongsBylVisualizations(this.style).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }


}
