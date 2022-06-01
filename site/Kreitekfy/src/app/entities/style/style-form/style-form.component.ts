import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Style } from '../model/style.model';
import { StyleService } from '../service/style.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.scss'],
  providers: [MessageService]
})
export class StyleFormComponent implements OnInit {

  styleId?: number;

  mode: "NEW" | "UPDATE" = "NEW";

  style?: Style;

  constructor(private route: ActivatedRoute, private styleService: StyleService, private messageService: MessageService) { }

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
        this.successAdd();
      },
      error: (err) => { this.handleError(); }
    })
  }

  public updateStyle(): void {
    this.styleService.update(this.style!).subscribe({
      next: (styleUpdated) => {
        this.successUpdate();
      },
      error: (err) => { this.handleError(); }
    })
  }

  private getStyle(styleId: number) {
    this.styleService.getStyleById(this.styleId!).subscribe({
      next: (artistRequest) => { this.style = artistRequest },
      error: (err) => { this.handleError() }
    })
  }

  private initializeStyle(): void {
    this.style = new Style(undefined, "");
  }

  private handleError(): void {
    this.errorMessage();
  }

  successUpdate() {
    this.messageService.add({ severity: 'success', summary: 'Estilo actualizado', detail: 'Se ha actualizado correctamente' });
  }

  successAdd() {
    this.messageService.add({ severity: 'success', summary: 'Estilo añadido', detail: 'Se ha insertado un nuevo estilo' });
  }

  errorMessage() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Se ha producido un error. Asegúrate que todos los campos estén rellenos' });
  }

}
