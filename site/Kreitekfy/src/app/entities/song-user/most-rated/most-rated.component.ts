import { Component, OnInit } from '@angular/core';
import { Rating } from '../../ratings/model/rating.model';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-most-rated',
  templateUrl: './most-rated.component.html',
  styleUrls: ['./most-rated.component.scss']
})
export class MostRatedComponent implements OnInit {

  songs: Song[] =[];
  style?: Style;
  selectedStyle?: Style;
  styleId?: number;
  rating?: Rating;


  constructor(private songUserService: SongService) { }

  ngOnInit(): void {
    this.getSongsByValoration();
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

  getSongsByValoration(): void {
    const filters:string | undefined = this.buildFilters();
    
    this.songUserService.getSongsByValoration(this.style).subscribe({
      next: (data: any) => { 
        this.songs = data.content; 
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

  public updateRating(): void {
    this.songUserService.updateRating(this.rating!).subscribe({
      next: (ratingUpdated) => {
        console.log("Actualizado correctamente");
        console.log(ratingUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }
}
