import { Component, Input, Output, EventEmitter } from '@angular/core';
import { watcher, movie } from '../types'

@Component({
   selector: 'watcher',
   templateUrl: './watcher.component.html',
   styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent {
   @Input() watcher: watcher
   @Output() userMovies: EventEmitter<movie[]> = new EventEmitter<movie[]>()

}
