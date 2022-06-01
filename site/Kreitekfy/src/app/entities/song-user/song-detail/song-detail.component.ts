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

  mode: "NEW" | "UPDATE" = "NEW";
  songId?: number;
  userId?: number;
  quantity?: number;
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
    this.userId = +this.router.snapshot.paramMap.get("userId")!;
    this.getRating(this.songId, this.userId);
    this.getSongById(this.songId);
    this.getViews(this.songId, this.userId);
    
  }

  public getSongById(songId: number): void {
    this.songService.getSongById(songId).subscribe({
      next: (songRequest) => {
        this.song = songRequest;
      },
      error: (err) => { this.handleError(err); }
    })


  }

  private getViews(songId: number, userId: number): void{
    this.songUserService.getViewsById(songId, userId).subscribe({
      next: (viewsRequest) => {
        this.views = viewsRequest;
        this.mode = "UPDATE";
      },
      error: (err) => { 
        this.mode = "NEW";
        this.handleError(err); }
    })
  }

  private insertViews(songId?: number, userId?: number): void {
    this.songUserService.insertViews(this.songId!, this.userId!).subscribe({
      next: (viewsInserted) => {
        console.log("Insertado correctamente");
        console.log(viewsInserted);
        this.mode = "UPDATE";
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public updateViews(songId?: number, userId?: number): void {
    this.songUserService.updateViews(this.songId!, this.userId!).subscribe({
      next: (viewsUpdated) => {
        console.log("Actualizado correctamente");
        console.log(viewsUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public saveViews(): void {
    if (this.mode === "NEW") {
      this.insertViews(this.songId, this.userId);
    }

    if (this.mode === "UPDATE") {
      this.updateViews(this.songId, this.userId);
    }
  }

  private getRating(songId: number, userId: number): void{
    this.songUserService.getRatingById(songId, userId).subscribe({
      next: (ratingRequest) => {
        this.rating = ratingRequest;
        this.mode = "UPDATE";
      },
      error: (err) => { 
        this.mode = "NEW";
        this.handleError(err); }
    })
  }

  private insertRating(songId?: number, userId?: number, quantity?: number): void {
    this.songUserService.insertRating(this.songId!, this.userId!, this.quantity!).subscribe({
      next: (ratingInserted) => {
        console.log("Insertado correctamente");
        console.log(ratingInserted);
        this.mode = "UPDATE";
      },
      error: (err) => {this.handleError(err);}
    })
  }

  
  public updateRating(songId?: number, userId?: number, quantity?: number): void {
    this.songUserService.updateRating(this.songId!, this.userId!, this.quantity!).subscribe({
      next: (ratingsUpdated) => {
        console.log("Actualizado correctamente");
        console.log(ratingsUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public saveRating(): void {
    if (this.mode === "NEW") {
      this.insertRating();
    }

    if (this.mode === "UPDATE") {
      this.updateRating();
    }
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
