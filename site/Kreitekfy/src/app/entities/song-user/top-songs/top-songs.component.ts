import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';
import { Views } from '../../views/model/views.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  songs: Song[] =[];
  style?: Style;
  views?: Views;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  public updateViews(): void {
    this.songService.updateViews(this.views!).subscribe({
      next: (viewsUpdated) => {
        console.log("Actualizado correctamente");
        console.log(viewsUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }


}
