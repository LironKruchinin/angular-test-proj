import { Component } from '@angular/core';
import watcherList from '../../../service/watchers.json'
import { watcher, movie } from './types'

@Component({
   selector: 'watchers',
   templateUrl: './watchers.component.html',
   styleUrls: ['./watchers.component.scss']
})

export class WatchersComponent {
   watchers: watcher[]
   watcher = {}
   userMovies: movie[] = []

   ngOnInit() {
      this.watchers = watcherList
   }

   openModal(currWatcher: Object) {
      this.watcher = currWatcher
   }

   closeModal() {
      this.watcher = {}
   }

   handleUserMovies(movies: movie[]) {
      this.userMovies = movies
   }

}
