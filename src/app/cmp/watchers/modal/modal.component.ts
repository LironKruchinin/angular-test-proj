import { Component, Input } from '@angular/core';
import { currWatcher } from '../types'
@Component({
   selector: 'modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

   @Input() currWatcher: currWatcher
   @Input() userMovies: any

   ngOnInit() {
      console.log(this.userMovies)
   }

   closeModal() {
      this.currWatcher = {}
   }
}
