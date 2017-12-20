import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TermSetComponent } from './term-set/term-set.component';
import { DateSetComponent } from './date-set/date-set.component';

const appRoutes: Routes = [
  { path: 'date-set/:target', component: DateSetComponent },
  { path: 'term-set/:start/:end', component: TermSetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DateSetComponent,
    TermSetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
