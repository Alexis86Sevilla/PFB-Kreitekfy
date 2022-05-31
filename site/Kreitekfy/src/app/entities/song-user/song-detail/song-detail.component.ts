import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../song/model/song.model';
import { SongService } from '../../song/service/song.service';
import { SongUserService } from '../service/song.service';
import { Style } from '../../style/model/style.model';
import { Views } from '../../views/model/views.model';
import { Rating } from '../../ratings/model/rating.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  songId?: number;
  song!: Song;
  style?: Style;
  views?: Views;
  rating?: Rating;


  constructor(
    private songService: SongService, 
    private router: ActivatedRoute, 
    private songUserService: SongUserService
    ) {

  }

  ngOnInit(): void {
    this.songId = +this.router.snapshot.paramMap.get("songId")!;
    this.getSongById(this.songId);
  }

  public getSongById(songId: number): void {
    this.songService.getSongById(songId).subscribe({
      next: (songRequest) => {
        this.song = songRequest;
      },
      error: (err) => { this.handleError(err); }
    })


  }

  public updateViews(): void {
    this.songUserService.updateViews(this.views!).subscribe({
      next: (viewsUpdated) => {
        console.log("Actualizado correctamente");
        console.log(viewsUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
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

  private handleError(error: any): void {
    console.log(error);
  }
}
