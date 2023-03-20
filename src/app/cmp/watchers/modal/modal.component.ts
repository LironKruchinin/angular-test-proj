import { Component, Input } from '@angular/core';

@Component({
   selector: 'modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

   @Input() currWatcher: { name?: string, email?: string, movies?: { title: string, year?: number, rating?: number }[] }

   closeModal() {
      this.currWatcher = {}
   }
}
