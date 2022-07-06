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
  row!: Jeton[];
  code!: string[];
  historique!: CodeRow[];

  constructor(
    private regles: ColorsService
  ) { }

  ngOnInit(): void {

    this.historique = [];
    this.row = [];
    this.code = this.regles.generatedCode();

    for (let i = 0; i < 4; i++) {
      this.row.push(new Jeton(this.regles.changeColor(this.regles.randomIndex())));
    }

    console.log(this.row);
  }

  onSubmitCode() {

    let test =  new CodeRow();
    for (const jeton of this.row) {
      test.listColor.push(jeton.color)
    }

    if(this.regles.checkDoublon(test.listColor)){
      alert("Interdit de proposer 2 fois la meme couleur dans un essai")
    }else{
      test.indice = this.regles.matchCode(this.code, this.code);
      this.historique.push(test);
    }

    //if(this.regles.matchCode(this.code, tmp))

  }

  onChangeColor(item: Jeton) {
    const index = this.regles.colors.indexOf(item.color);
    item.color = this.regles.changeColor(index)
  }
}
