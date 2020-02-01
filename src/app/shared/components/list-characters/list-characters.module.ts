import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterModule } from '../character/character.module';
import { ListCharactersComponent } from './list-characters.component';

@NgModule({
  declarations: [ListCharactersComponent],
  imports: [
    CommonModule,
    CharacterModule
  ]
})
export class ListCharactersModule { }
