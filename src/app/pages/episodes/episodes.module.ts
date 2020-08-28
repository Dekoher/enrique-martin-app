import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { ComponentComponent } from './component/component.component';
import { EpisodesComponent } from './components/episodes/episodes.component';


@NgModule({
  declarations: [ComponentComponent, EpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
