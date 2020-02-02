import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  constructor(private serviceCharacter: CharacterService) { }

  characters: Character[]
  ngOnInit() {
    this.serviceCharacter.getCharacters().subscribe((response) => {
      this.characters = response;
    }, (error) => {
      alert('error when performing the query, try again...');

    })
  }

}
