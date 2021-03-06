import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/Router'

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DisplayComponent } from './display/display.component';
import { SharedService } from './shared.service';

const linkRoutes: Routes = [
  {path: 'entry', component: EntryComponent},
  {path: 'display', component: DisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(linkRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }