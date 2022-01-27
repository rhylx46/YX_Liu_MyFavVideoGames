import {Component, Injectable} from '@angular/core';
// import { Content } from 'src/app/helper-files/content-interface';
import {Content} from "./content-interface";

export class ContentList {
  games: Content[];

  constructor() {
    this.games = [];
  }

  get gamesArr(): Content[] {
    return this.games;
  };

  pushArr(content: Content) {
    this.gamesArr.push(content)
  }

  get lengthArr() {
    return this.games.length
  }

  displayContent(id: number): string {

    return `<div>
                <h1>title: ${this.gamesArr[id].title}</h1><br>
                <p>description: ${this.gamesArr[id].description}</p><br>
                <p>creator: ${this.gamesArr[id].creator}</p><br>
                <img src="${this.gamesArr[id].imgURL}" alt="img" height="500"/>
                <p>type: ${this.gamesArr[id].type}</p><br>
            </div>`;
  }


}
