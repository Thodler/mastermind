import {Injectable} from '@angular/core';
import {CodeRow} from "../../_models/CodeRow";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

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

  /**
   * Donne la couleur suivante du tableau de couleurs
   * @param index
   */
  changeColor(index:number):string {
    const resultat = index >= this.colors.length-1 ? 0 : ++index;
    return this.colors[resultat];
  }

  checkDoublon(row: string[]):boolean{
    const resultat = row.filter( (jeton , index)=> row.indexOf(jeton) == index);

    return  resultat.length !== 4;
  }

  /**
   * Donne la combinaison a trouver sans doublon
   */
  generatedCode(): string[]{
    let code: string[] = [];

    while( code.length != 4 ){
      let color: string = this.colors[this.randomIndex()];

      if(!code.includes(color)){
        code.push(color)
      }

    }

    return code;
  }

  matchCode(code: string[], codePlayed: string[]): string {
    let goodPos  = 0;
    let wrongPos = 0;

    codePlayed.forEach((elt, i)=>{
      if(elt === code[i]){
        goodPos++;
      } else if (code.includes(elt)){
        wrongPos++;
      }
    })

    return `Bonne position: ${goodPos}\n
    Mauvaise position: ${wrongPos}`;
  }

  // /**
  //  * Donne une couleur aléatoire à un item
  //  */
  // randomColorRow(): void{
  //   this.row = [];
  //   for (let i = 0; i < 4; i++) {
  //     this.row.push(new Jeton(this.colors[this.randomIndex()]));
  //   }
  // }


}
