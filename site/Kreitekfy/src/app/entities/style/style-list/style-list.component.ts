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
  styleIdToDelete?: number;

  constructor(private styleService: StyleService) { }

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
        error: (err) => {this.handleError(err)}
      })
    }
  }

  public insertStyles(styleToSave: Style): void {
    this.styleService.insert(styleToSave).subscribe({
      next: (styleInserted) => {
        console.log("Añadido correctamente");
        console.log(styleInserted);
      },
      error: (err) => {this.handleError(err);}
    })
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
