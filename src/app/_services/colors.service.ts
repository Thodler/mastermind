import {Injectable} from '@angular/core';
import {Jeton} from "../../_models/Jeton";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  row!: Jeton[];
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

  changeColor(index:number):string {
    const resultat = index >= this.colors.length-1 ? 0 : ++index;
    return this.colors[resultat];
  }

  /**
   * Donne une couleur aléatoire à un item
   */
  randomColorRow(): void{
    this.row = [];
    for (let i = 0; i < 4; i++) {
      this.row.push(new Jeton(this.colors[this.randomIndex()]));
    }
  }


}
