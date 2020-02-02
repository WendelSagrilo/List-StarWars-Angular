import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './Not-found/not-found.component';
import { ListCharactersComponent } from './shared/components/list-characters/list-characters.component';
import { CharacterComponent } from './shared/components/character/character.component';
import { HoverStyleDirective } from './shared/directives/hover-style/hover-style.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingService } from './shared/services/loading.service';
import { LoadingInterceptor } from './shared/services/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ListCharactersComponent,
    CharacterComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,

  ],
  providers: [LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
