import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './Not-found/not-found.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
