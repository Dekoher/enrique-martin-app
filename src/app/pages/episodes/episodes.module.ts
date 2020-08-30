import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [EpisodesComponent, EpisodeDetailComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MaterialModule,
  ]
})
export class EpisodesModule { }
