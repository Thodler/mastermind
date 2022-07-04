import {Component, OnInit} from '@angular/core';
import {Color} from "../../_models/Color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  item = new Color();
  indexColor!: number;

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
    this.indexColor = this.randomIndex();
    this.item.color = this.colors[this.indexColor];
  }

  /**
   * Donne un nombre aléatoire entre 0 et la longueur du tableau "colors"
   */
  randomIndex(): number{
    return Math.floor(Math.random() * this.colors.length)
  }
}
