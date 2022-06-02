import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isAdmin: boolean = false;
  isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
   
  }

  public toggleToAdmin(): void {
    this.isAdmin = true;
    this.isLogged = true;
  }

  public toggleToUser(): void {
    this.isAdmin = false;
    this.isLogged = true;
  }

}
