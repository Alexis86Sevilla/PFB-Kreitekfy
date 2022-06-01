import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../song/model/song.model';
import { SongUserService } from '../service/song.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  songs: Song[] =[];
  userId?: number;


  constructor(private songUserService: SongUserService, 
    private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.userId = +this.router.snapshot.paramMap.get("userId")!;

    this.getSongsForYou();
  }

  getSongsForYou(): void {
    
    this.songUserService.getSongsForYou(this.userId!).subscribe({
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
