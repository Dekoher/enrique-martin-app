import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../core/services/episodes/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'episode', 'actions'];
  dataSource = [];
  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.fetchEpisodes();
  }

  fetchEpisodes() {
    this.episodeService.getAllEpisodes().subscribe(episodes => {
      this.dataSource = episodes.results;
    });
  }

}
