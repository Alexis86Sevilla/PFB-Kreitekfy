import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';
import { SongService } from '../../song/service/song.service';
import { Style } from '../../style/model/style.model';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  songs: Song[] =[];
  style?: Style;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  public addValorationToOneSong(valoration: number) {

  }

  

}
