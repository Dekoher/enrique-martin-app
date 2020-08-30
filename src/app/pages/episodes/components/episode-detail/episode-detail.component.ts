import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EpisodeService } from '../../../../core/services/episodes/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'species', 'status', 'origin', 'image'];
  dataSource = [];
  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchEpisode(id);
    });
  }

  fetchEpisode(id: number): void {
    this.episodeService.getEpisode(id).subscribe(episode => {
      this.episodeService.getChapterCharacters(episode.characters).subscribe(character => {
        this.dataSource = character;
      });
    });
  }
}
