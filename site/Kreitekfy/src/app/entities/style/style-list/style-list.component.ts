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
  style?: Style;
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
    this.styleService.getAllStyles().subscribe({
      next: (data: any) => { this.styles = data.content; },
      error: (err) => { this.handleError(err); }
    })
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
