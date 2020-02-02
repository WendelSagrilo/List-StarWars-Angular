import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  constructor(private serviceCharacter: CharacterService) { }
  @Output() getCharacters: EventEmitter<Character[]> = new EventEmitter()

  @Input() characters: Character[];
  
  ngOnInit() {
    this.serviceCharacter.getCharacters().subscribe((response) => {
      this.characters = response;

      this.getCharacters.emit(this.characters);
    }, (error) => {
      alert('error when performing the query, try again...');

    })
  }

}
