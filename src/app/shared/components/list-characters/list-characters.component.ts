import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  constructor() { }

  characters: Character[]
  ngOnInit() {
    this.characters = [
      {
        id: 1,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },
      {
        id: 2,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },
      {
        id: 3,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },
      {
        id: 4,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },
      {
        id: 5,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },
      {
        id: 6,
        name: "Obi-Wan Kenobi",
        position: "Chefe de Operações",
        pathImage: "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
        description: `Pessoa bacaninha e lorem ipsum 
        Pessoa bacaninha e lorem ipsum Pessoa bacaninha e lorem ipsum`
      },

    ]


  }

}
