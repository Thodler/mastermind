import {Component, Input, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  randomColor!: number
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
    this.randomColor = Math.floor(Math.random() * this.colors.length)
  }

}
