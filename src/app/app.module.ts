import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateSetComponent } from './date-set/date-set.component';
import { TermSetComponent } from './term-set/term-set.component';


@NgModule({
  declarations: [
    AppComponent,
    DateSetComponent,
    TermSetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
