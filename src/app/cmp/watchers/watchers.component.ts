import { Component } from '@angular/core';
import watcherList from '../../../service/watchers.json'

@Component({
   selector: 'watchers',
   templateUrl: './watchers.component.html',
   styleUrls: ['./watchers.component.scss']
})

export class WatchersComponent {
   watchers: Array<Object> = []

   ngOnInit() {
      this.watchers = watcherList
   }

}
