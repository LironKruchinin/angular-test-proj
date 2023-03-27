import { Component, Input } from '@angular/core';
import { MovieService } from '../../../../service/movie/movie.service'
import { currWatcher, movieWatcher } from '../types'
@Component({
   selector: 'modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

   @Input() currWatcher: currWatcher
   @Input() userMovies: any
   constructor(private MovieService: MovieService) { }
   movieData: movieWatcher[]


   async ngOnInit() {
      console.log(this.currWatcher)
      const movies: any = await this.MovieService.getMoviePosters(this.currWatcher)
      console.log(movies)
      this.movieData = movies
   }

   closeModal() {
      this.currWatcher = {}
      this.movieData = []
   }
}
