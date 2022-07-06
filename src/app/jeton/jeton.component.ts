import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jeton',
  templateUrl: './jeton.component.html',
  styleUrls: ['./jeton.component.scss']
})
export class JetonComponent implements OnInit {

  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
