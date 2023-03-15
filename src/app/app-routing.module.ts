import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cmp/home/home.component';
import { MousePosComponent } from './cmp/mouse-pos/mouse-pos.component';
import { TimerComponent } from './cmp/timer/timer.component';
import { WatchersComponent } from './cmp/watchers/watchers.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'timer', component: TimerComponent },
   { path: 'mouse', component: MousePosComponent },
   { path: 'watcher', component: WatchersComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
