import {Component, Input, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  codeResearch: Color[] = [];
  randomColor!: number;
  colors = [
    'yellow',
    'pink',
    'green',
    'red',
    'skyblue',
    'orange'
  ];

  constructor() { }

  ngOnInit(): void {
    this.randomColorRow();
  }

  randomColorRow(){
    for (let i = 0; i < 4; i++) {
      this.randomColor = Math.floor(Math.random() * this.colors.length);
      let myColor = new Color();
      myColor.color = this.colors[this.randomColor];
      this.codeResearch.push(myColor);
    }
  }

}
