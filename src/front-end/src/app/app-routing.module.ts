import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPlayerComponent } from './search-player/search-player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search-player' },
  { path: 'search-player', component: SearchPlayerComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }