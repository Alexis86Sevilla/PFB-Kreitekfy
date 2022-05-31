import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../song/model/song.model';
import { SongService } from '../../song/service/song.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  songId?: number;
  song!: Song;

  constructor(private songService: SongService, private router: ActivatedRoute) {

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

  private handleError(error: any): void {
    console.log(error);
  }
}
