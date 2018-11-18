import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';

@NgModule({
  declarations: [
    AppComponent,
    ReplaysubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
