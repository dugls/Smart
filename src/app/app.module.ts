import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LettersComponent } from './letters/letters.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
