import { Component, Input } from '@angular/core';
import { watcher } from '../types';

@Component({
   selector: 'watcher',
   templateUrl: './watcher.component.html',
   styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent {
   @Input() watcher: watcher
}
