import {jogosService } from './jogos.service';
import { jogo } from './jogo/jogo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class jogosComponent implements OnInit {

  jogos : jogo[];

  constructor(private jogosService: jogosService) { }

  ngOnInit(): void {
    this.jogos = this.jogosService.jogos();

  }

}
