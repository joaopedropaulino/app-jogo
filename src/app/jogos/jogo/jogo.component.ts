import { Component, Input, OnInit } from '@angular/core';
import { jogo } from './jogo.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class jogoComponent implements OnInit {

  @Input() jogo: jogo;

  constructor() { }

  ngOnInit(): void {
  }

}
