import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getAllEpisodes(page: number = 1): Observable<any> {
    return this.http.get(`${environment.urlBase}/episode?page=${page}`);
  }

  getEpisode(id: number): Observable<any>  {
    return this.http.get(`${environment.urlBase}/episode/${id}`);
  }

  getChapterCharacters(charactersArray: any): Observable<any> {
    const requestArray = [];
    for (const character of charactersArray) {
      const request = this.http.get(character);
      requestArray.push(request);
    }
    return forkJoin(requestArray);
  }
}
