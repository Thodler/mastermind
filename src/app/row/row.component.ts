import {Component, Input, OnInit} from '@angular/core';
import {Jeton} from "../../_models/Jeton";
import {ColorsService} from "../_services/colors.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  row!: Jeton[];

  constructor(
    private regles: ColorsService
  ) { }

  ngOnInit(): void {
    this.row = [];
    for (let i = 0; i < 4; i++) {
      this.row.push(new Jeton(this.regles.changeColor(this.regles.randomIndex())));
    }
  }

  onSubmitCode() {
    console.log(this.row)
  }

  onChangeColor(item: Jeton) {
    const index = this.regles.colors.indexOf(item.color);
    item.color = this.regles.changeColor(index)
  }
}
