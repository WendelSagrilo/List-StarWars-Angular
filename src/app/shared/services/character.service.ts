import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

const URL_REQUEST = "http://5dd5b6d7ce4c3000144031aa.mockapi.io/star";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Character[]>(URL_REQUEST);
  }
}
