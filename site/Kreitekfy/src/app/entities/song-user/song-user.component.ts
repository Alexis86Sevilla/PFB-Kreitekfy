import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/pagination';
import { Song } from '../song/model/song.model';
import { Style } from '../style/model/style.model';
import { StyleService } from '../style/service/style.service';
import { SongUserService } from './service/song.service';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.scss']
})
export class SongUserComponent extends Pagination implements OnInit {

  songs: Song[] = [];
  styles: Style[] = [];
  song?: Song;  
  style?: Style;
  selectedStyle?: Style;
  styleId?: number;
  newComponent?: NewsComponent;

 
  constructor(private songUserService: SongUserService, private styleService: StyleService) {
    super();
  }

  ngOnInit(): void {
  }

  private handleError(error: any): void {
    console.log(error);
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

  public styleSelected(): void {
    this.song!.styleId = this.selectedStyle!.id;
    this.song!.styleName = this.selectedStyle!.name;
  }

  public styleUnselected(): void {
    this.song!.styleId = undefined;
    this.song!.styleName = undefined;
  }

  public searchByFilters(): void {
    this.newComponent?.getNewSongs();
    //TODO añadir los métodos que cargan las canciones por novedades, escuchadas...
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


}
