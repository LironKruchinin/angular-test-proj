import { Component, Input } from '@angular/core';

@Component({
   selector: 'modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

   @Input() currWatcher: any | undefined

   closeModal() {
      this.currWatcher = {}
   }
}
