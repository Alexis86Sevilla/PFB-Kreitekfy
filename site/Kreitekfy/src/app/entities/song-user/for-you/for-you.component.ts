import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';
import { SongUserService } from '../service/song.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  songs: Song[] =[];


  constructor(private songUserService: SongUserService) { }

  ngOnInit(): void {
    this.getSongsForYou();
  }

  getSongsForYou(): void {
    
    this.songUserService.getSongsForYou().subscribe({
      next: (songsRequest) => { 
        this.songs = songsRequest; 
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
