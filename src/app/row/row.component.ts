import { Component, OnInit } from '@angular/core';
import {Color} from "../../_models/Color";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  codeResearch: Color[] = [];
  constructor() { }

  ngOnInit(): void {
    this.randomColorRow();
  }

  /**
   * Donne une couleur aléatoire à un item
   */
  randomColorRow(): void{
    for (let i = 0; i < 4; i++) {
      let myColor = new Color();
      this.codeResearch.push(myColor);
    }
  }

  onSubmitCode() {
    console.log(this.codeResearch);
  }
}
