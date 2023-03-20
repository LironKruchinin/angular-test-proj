import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import watcherList from '../../../service/watchers.json'
import { watcher } from './types'

@Component({
   selector: 'watchers',
   templateUrl: './watchers.component.html',
   styleUrls: ['./watchers.component.scss']
})

export class WatchersComponent {
   watchers: watcher[]
   isOpenModal = false
   watcher = {}

   ngOnInit() {
      this.watchers = watcherList
   }

   openModal(currWatcher: Object) {
      this.isOpenModal = !this.isOpenModal
      this.watcher = currWatcher
   }

   closeModal() {
      this.isOpenModal = false
      this.watcher = {}

   }

}
