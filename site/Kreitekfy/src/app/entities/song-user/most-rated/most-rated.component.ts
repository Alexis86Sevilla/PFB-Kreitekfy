import { Component, OnInit } from '@angular/core';
import { Song } from '../../song/model/song.model';

@Component({
  selector: 'app-most-rated',
  templateUrl: './most-rated.component.html',
  styleUrls: ['./most-rated.component.scss']
})
export class MostRatedComponent implements OnInit {

  songs: Song[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
