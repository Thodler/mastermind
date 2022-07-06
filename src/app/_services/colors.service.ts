import {Injectable, Input} from '@angular/core';
import {Color} from "../../_models/Color";
import {CodeRow} from "../../_models/CodeRow";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  codeResearch!: Color[];
  tentative!: CodeRow[][];


  @Input() item!: Color;
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

  /**
   * Donne un nombre aléatoire entre 0 et la longueur du tableau "colors"
   */
  randomIndex(): number{
    return Math.floor(Math.random() * this.colors.length)
  }

  changeColor():void {
    if (this.indexColor >= this.colors.length-1) this.indexColor = -1;
    this.item.color = this.colors[++this.indexColor];
    console.log(this.indexColor)
  }

  /**
   * Donne une couleur aléatoire à un item
   */
  randomColorRow(): void{
    for (let i = 0; i < 4; i++) {
      this.codeResearch.push(new Color());
    }
  }


}
