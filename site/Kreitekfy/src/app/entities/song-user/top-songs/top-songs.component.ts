import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';
import { Style } from '../../style/model/style.model';
import { Views } from '../../views/model/views.model';
import { SongUserService } from '../service/song.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  songs: Song[] =[];
  

  constructor(private songUserService: SongUserService) { }

  ngOnInit(): void {
  }

  


}
