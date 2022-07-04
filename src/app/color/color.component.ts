import {Component, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  item = new Color();
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
    this.item.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }


}
