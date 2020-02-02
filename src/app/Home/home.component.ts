import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Character } from '../shared/models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  characters: Character[];
  responseRequest: Character[];
  odd = false;

  ngOnInit() {
  }

  getCharacters($event) {
    this.characters = $event;
    this.responseRequest = $event;
    this.sortList("ISWAR");
  }

  sortList(sortList: string) {
    this.characters = this.responseRequest;

    switch (sortList) {
      case "isJedi":
        this.characters = this.characters.filter((c => c.isJedi));
        break;
      case "isSith":
        this.characters = this.characters.filter((c => !c.isJedi));
        break;
      case "ISWAR":
        this.odd = !this.odd;
        this.characters = this.characters.filter((c) => {
          let random = this.odd ? 0 : 1;
          if (random == 0)
            return c.idCharacter % 2 > 0;
          else
            return c.idCharacter % 2 == 0;
        });
        break;
      default:
        break;
    }
  }

}
