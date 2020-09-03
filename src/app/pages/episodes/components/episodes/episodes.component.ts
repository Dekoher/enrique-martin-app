import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../core/services/episodes/episode.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'episode', 'actions'];
  dataSource = [];
  totalEpisodes: number;
  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.fetchEpisodes();
  }

  fetchEpisodes(page: number = 1): void {
    this.episodeService.getAllEpisodes(page).subscribe(episodes => {
      this.dataSource = episodes.results;
      this.totalEpisodes = episodes.info.count;
    });
  }

  OnPageChange(event: PageEvent): void {
    this.fetchEpisodes(event.pageIndex + 1);
  }
}
