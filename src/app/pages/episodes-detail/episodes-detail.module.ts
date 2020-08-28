import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesDetailRoutingModule } from './episodes-detail-routing.module';
import { ComponentComponent } from './component/component.component';
import { EpisodeDetailComponent } from './component/episode-detail/episode-detail.component';


@NgModule({
  declarations: [ComponentComponent, EpisodeDetailComponent],
  imports: [
    CommonModule,
    EpisodesDetailRoutingModule
  ]
})
export class EpisodesDetailModule { }
