import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Character } from '../shared/models/character';
import $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  characters: Character[];
  responseRequest: Character[];
  odd:boolean = false;
  isMobile:boolean = window.screen.width < 575;
  action:string;

  

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
        this.action = '"may the force with you..."'
        this.scrollTop();
        break;
      case "isSith":
        this.characters = this.characters.filter((c => !c.isJedi));
        this.action = '"Come to the Dark side of the Force..."'
        this.scrollTop();
        break;
      case "ISWAR":
        this.odd = !this.odd;
        this.characters = this.characters.filter((c) => {
          this.action = `"Clone Fuckin' Wars!!!!"`
          let random = this.odd ? 0 : 1;
          if (random == 0){
            this.scrollTop();
            return c.idCharacter % 2 > 0;
          }
          else{
            this.scrollTop();
            return c.idCharacter % 2 == 0;
          }
        });
        break;
      default:
        break;
    }
    
  }
  scrollTop(){
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}


