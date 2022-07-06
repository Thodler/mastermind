import {Component, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";
import {CodeRow} from "../../_models/CodeRow";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  codeResearch!: CodeRow;

  constructor() { }

  ngOnInit(): void {
    this.codeResearch = new CodeRow();
    this.randomColorRow();
  }

  /**
   * Donne une couleur aléatoire à un item
   */
  randomColorRow(): void{
    for (let i = 0; i < 4; i++) {
      this.codeResearch.listColor.push(new Color());
    }
  }

  onSubmitCode() {
    console.log(this.codeResearch);
  }

}
