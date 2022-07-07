import {Component, Input, OnInit} from '@angular/core';
import {Jeton} from "../../_models/Jeton";
import {ColorsService} from "../_services/colors.service";
import {CodeRow} from "../../_models/CodeRow";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  life!: number;
  lifeMax!: number;
  code!: string[];
  winner!: boolean;
  message!: string;
  row!: Jeton[];
  historique!: CodeRow[];

  constructor(
    private regles: ColorsService
  ) { }

  ngOnInit(): void {
    this.life=12;
    this.lifeMax=12;
    this.winner = false;
    this.historique = [];
    this.row = [];
    this.code = this.regles.generatedCode();

    for (let i = 0; i < 4; i++) {
      this.row.push(new Jeton(this.regles.changeColor(this.regles.randomIndex())));
    }

  }

  onSubmitCode() {

    let test =  new CodeRow();
    for (const jeton of this.row) {
      test.listColor.push(jeton.color)
    }

    if(this.regles.checkDoublon(test.listColor)){
      alert("Interdit de proposer 2 fois la meme couleur dans un essai")
    }else{
      this.life--;
      test.indice = this.regles.matchCode(this.code, test.listColor);
      this.historique.push(test);

      if(this.life == 0){
        this.winner = true;
        this.message = "Vous avez perdu !"
      } else if(test.indice.length == 4 && !test.indice.includes("white")){
        this.winner = true;
        this.message = "Vous avez gagner !"
      };

    }

  }

  onChangeColor(item: Jeton) {
    const index = this.regles.colors.indexOf(item.color);
    item.color = this.regles.changeColor(index)
  }
}
