import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { TimerComponent } from './cmp/timer/timer.component';
import { MousePosComponent } from './cmp/mouse-pos/mouse-pos.component';
import { HomeComponent } from './cmp/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MousePosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
