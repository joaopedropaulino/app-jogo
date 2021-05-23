import { Injectable } from '@angular/core';
import { jogo } from './jogo/jogo.model';

@Injectable({
  providedIn: 'root',
})
export class jogosService {
  rests: jogo[] = [
    {
      id: 'red-dead2',
      nome: 'red dead redemption 2',
      categoria: 'jogo 3°pessoa',
      tempodejogo: '60h',
      nota: 97,
      imagePath: 'assets/img/jogs/red dead2.png',
    },

    {
      id: 'god4',
      nome: 'god of war 4',
      categoria: 'jogo 1°pessoa',
      tempodejogo: '35h',
      nota: 94,
      imagePath: 'assets/img/jogs/god4.png',
    },
    {
      id: 'bruxinho3',
      nome: 'the witcher 3',
      categoria: 'jogo 3°pessoa',
      tempodejogo: '50h',
      nota: 92,
      imagePath: 'assets/img/jogs/bruxinho3.png',
    },

    {
      id: 'ark',
      nome: 'ark survival evolved',
      categoria: 'jogo 1° & 3° pessoa',
      tempodejogo: '300h',
      nota: 70,
      imagePath: 'assets/img/jogs/ark.png',
    },
    {
      id: 'dark-souls',
      nome: 'dark souls',
      categoria: 'jogo 3°pessoa',
      tempodejogo: '35h',
      nota: 89,
      imagePath: 'assets/img/jogs/dark souls.png',
    },

    {
      id: 're4',
      nome: 'resident evil 4',
      categoria: 'jogo 3° pessoa',
      tempodejogo: '14h',
      nota: 80,
      imagePath: 'assets/img/jogs/re4.png',
    },
    {
      id: 'cod-warzone',
      nome: 'cod warzone',
      categoria: 'jogo 3° pessoa',
      tempodejogo: '?',
      nota: 79,
      imagePath: 'assets/img/jogs/cod warzone.png',
    },

    {
      id: 'skyrim',
      nome: 'skyrim',
      categoria: 'jogo 1° & 3° pessoa',
      tempodejogo: '201h',
      nota: 81,
      imagePath: 'assets/img/jogs/skyrim.png',
    },
  ];

  constructor() {}

  jogos() : jogo[]{
    return this.rests;
  }
}
