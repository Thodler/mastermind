import {Component, Input, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";
import {CodeRow} from "../../_models/CodeRow";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  codeResearch!: Color[];
  tentative!: CodeRow[][];

  constructor() { }

  ngOnInit(): void {
    this.tentative = [];
    this.codeResearch = [];
  }

  onSubmitCode() {
    console.log(this.tentative)
  }

}
