import { Component, Input } from '@angular/core';
import { MovieService } from '../../../../service/movie/movie.service'
import { watcher } from '../types';

@Component({
   selector: 'watcher',
   templateUrl: './watcher.component.html',
   styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent {
   constructor(private MovieService: MovieService) { }
   @Input() watcher: watcher


   ngOnInit() {
      console.log(this.MovieService.getHelloWorld());
   }
}
