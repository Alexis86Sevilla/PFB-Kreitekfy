import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Style } from '../model/style.model';
import { StyleService } from '../service/style.service';

@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.scss']
})
export class StyleFormComponent implements OnInit {

  styleId?: number;

  mode: "NEW" | "UPDATE" = "NEW";

  style?: Style;

  constructor(private route: ActivatedRoute, private styleService: StyleService) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("styleId") ?? "new"
    if (entryParam !== "new") {
      this.styleId = +this.route.snapshot.paramMap.get("styleId")!;
      this.mode = "UPDATE"
      this.getStyle(this.styleId);
    } else {
      this.mode = "NEW"
      this.initializeStyle();
    }
  }

  public saveStyle(): void {
    if (this.mode === "NEW") {
      this.insertStyle();
    }

    if (this.mode === "UPDATE") {
      this.updateStyle();
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

  public updateStyle(): void {
    this.styleService.update(this.style!).subscribe({
      next: (styleUpdated) => {
        console.log("Añadido correctamente");
        console.log(styleUpdated);
      },
      error: (err) => { this.handleError(err); }
    })
  }

  private getStyle(styleId: number) {
    this.styleService.getStyleById(this.styleId!).subscribe({
      next: (artistRequest) => { this.style = artistRequest },
      error: (err) => { this.handleError(err) }
    })
  }

  private initializeStyle(): void {
    this.style = new Style(undefined, "");
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
