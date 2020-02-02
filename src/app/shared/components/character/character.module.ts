import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { HoverStyleModule } from '../../directives/hover-style/hover-style.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HoverStyleModule,
  ]
})
export class CharacterModule { }
 