import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/pagination';
import { Style } from '../model/style.model';
import { StyleService } from '../service/style.service';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss']
})
export class StyleListComponent extends Pagination implements OnInit  {
  styles: Style[] = [];
  style?: Style;
  styleIdToDelete?: number;


  constructor(private styleService: StyleService) {
    super();
  }

  ngOnInit(): void {
    this.getStyles();
  }

  public prepareStyleToDelete(styleId: number): void {
    this.styleIdToDelete = styleId;
  }

  public deleteStyle(): void {
    if (this.styleIdToDelete) {
      this.styleService.deleteStyle(this.styleIdToDelete).subscribe({
        next: (data) => {
          this.getStyles();
        },
        error: (err) => { this.handleError(err) }
      })
    }
  }

  public insertStyle(): void {
    this.styleService.insert(this.style!).subscribe({
      next: (styleInserted) => {
        console.log("Añadido correctamente");
        console.log(styleInserted);
      },
      error: (err) => { this.handleError(err); }
    })
  }

  private getStyles(): void {
    this.styleService.getStyles(this.page, this.size, this.sort).subscribe({
      next: (data: any) => {
        this.styles = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
       },
      error: (err) => { this.handleError(err); }
    })
  }

  public nextPage():void{
    this.page +=  1
    this.getStyles();
  }

  public previousPage():void{
    this.page -= 1;
    this.getStyles();
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
