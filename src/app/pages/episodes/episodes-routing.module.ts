import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent
  },
  {
    path: ':id',
    component: EpisodeDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
