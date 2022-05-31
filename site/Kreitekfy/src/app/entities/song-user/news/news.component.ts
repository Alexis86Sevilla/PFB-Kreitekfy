import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/pagination';
import { Song } from '../../song/model/song.model';
import { SongService } from '../service/song.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends Pagination implements OnInit {
  songs: Song[] = [];
  constructor(private songUserService: SongService) {
    super();
  }

  ngOnInit(): void {
    this.getNewSongs();
  }

  public getNewSongs(): void {
    this.songUserService.getAllNewSongs()
      .subscribe({
        next: (data: any) => {
          this.songs = data.content;
        },
        error: (err) => { this.handleError(err); }
      })

  }

  private handleError(error: any): void {
    console.log(error);
  }

}
