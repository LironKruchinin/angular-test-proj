import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { TimerComponent } from './cmp/timer/timer.component';
import { MousePosComponent } from './cmp/mouse-pos/mouse-pos.component';
import { HomeComponent } from './cmp/home/home.component';
import { WatchersComponent } from './cmp/watchers/watchers.component';
import { WatcherComponent } from './cmp/watchers/watcher/watcher.component';
import { ModalComponent } from './cmp/watchers/modal/modal.component';

@NgModule({
   declarations: [
      AppComponent,
      TimerComponent,
      MousePosComponent,
      HomeComponent,
      WatchersComponent,
      WatcherComponent,
      ModalComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatIconModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
