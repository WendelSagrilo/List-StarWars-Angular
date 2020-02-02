import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './Not-found/not-found.component';
import { ListCharactersComponent } from './shared/components/list-characters/list-characters.component';
import { CharacterComponent } from './shared/components/character/character.component';
import { HoverStyleDirective } from './shared/directives/hover-style/hover-style.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ListCharactersComponent,
    CharacterComponent,
    HoverStyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
