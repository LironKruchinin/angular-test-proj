import { Component } from '@angular/core';
import watcherList from '../../../service/watchers.json'

@Component({
   selector: 'watchers',
   templateUrl: './watchers.component.html',
   styleUrls: ['./watchers.component.scss']
})

export class WatchersComponent {
   watchers: Array<Object> = []
   isOpenModal = false
   watcher = {}

   ngOnInit() {
      this.watchers = watcherList
   }

   openModal(currWatcher: Object) {
      this.isOpenModal = !this.isOpenModal
      this.watcher = currWatcher
      console.log('open modal', this.isOpenModal)
      console.log('who is watching', this.watcher)
   }

   closeModal() {
      this.isOpenModal = false
      this.watcher = {}

   }

}
