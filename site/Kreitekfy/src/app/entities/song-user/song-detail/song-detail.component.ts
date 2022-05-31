import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  songId?:number;

  constructor() { }

  ngOnInit(): void {
  }

  public getSongById(songId:number):void{


    
  }

}
