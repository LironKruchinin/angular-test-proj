import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
   selector: 'watcher',
   templateUrl: './watcher.component.html',
   styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent {
   @Input() watcher: any
}