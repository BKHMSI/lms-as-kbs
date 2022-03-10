import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PapersComponent } from './papers/papers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PapersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
