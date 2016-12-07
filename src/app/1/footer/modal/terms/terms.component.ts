import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {

  constructor() { }

  public visible = false;

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    setTimeout(() => this.visible = false, 300);
  }
}
