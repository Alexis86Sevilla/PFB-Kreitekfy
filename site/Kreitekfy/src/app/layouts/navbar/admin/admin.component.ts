import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  public toggleToAdmin(): void {
    this.isAdmin = true;
  }

  public toggleToUser(): void {
    this.isAdmin = false;
  }
}
