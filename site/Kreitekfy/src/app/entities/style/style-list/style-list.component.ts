import { Component, OnInit } from '@angular/core';
import { Style } from '../model/style.model';
import { StyleService } from '../service/style.service';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss']
})
export class StyleListComponent implements OnInit {
  styles: Style[] = [];

  constructor(private styleService: StyleService) { }

  ngOnInit(): void {
    this.getStyles();
  }

  private getStyles(): void {
    this.styleService.getAllStyles().subscribe({
      next: (stylesRequest) => { this.styles = stylesRequest; },
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
