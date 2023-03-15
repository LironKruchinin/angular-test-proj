import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MousePosComponent } from './cmp/mouse-pos/mouse-pos.component';
import { TimerComponent } from './cmp/timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'mouse', component: MousePosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
