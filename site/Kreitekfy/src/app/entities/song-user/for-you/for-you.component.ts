import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  songs: Song[] =[];


  constructor() { }

  ngOnInit(): void {
  }

}
