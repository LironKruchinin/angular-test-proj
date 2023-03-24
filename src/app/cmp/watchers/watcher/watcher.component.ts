import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../../service/movie/movie.service'
import { watcher, movie } from '../types'

@Component({
   selector: 'watcher',
   templateUrl: './watcher.component.html',
   styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent {
   @Input() watcher: watcher
   @Output() userMovies: EventEmitter<movie[]> = new EventEmitter<movie[]>()

   constructor(private MovieService: MovieService) { }

   async ngOnInit() {
      const movies: any = await this.MovieService.getMoviePosters(this.watcher)
      this.userMovies.emit(movies)
   }

}
