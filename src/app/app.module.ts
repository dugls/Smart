import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterRoutingModule } from '../app/router/router-routing.module';
import { Routes, RouterModule } from '@angular/router';
/home/roman/Desktop/Projects/skart

import { AppComponent } from './app.component';
import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { SpecificComponent } from './left/specific/specific.component';
import { MeasurableComponent } from './left/measurable/measurable.component';
import { AchievableComponent } from './left/achievable/achievable.component';
import { RelevantComponent } from './left/relevant/relevant.component';
import { TimeComponent } from './left/time/time.component';
import { SharedService } from './Services/shared.service';
import { LetterBindService } from './Services/letter-bind.service';
import { AnimationDirective } from './Directives/animation.directive';


@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    LeftComponent,
    RightComponent,
    SpecificComponent,
    MeasurableComponent,
    AchievableComponent,
    RelevantComponent,
    TimeComponent,
    AnimationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    RouterRoutingModule
  ],
  exports: [
    RouterModule
  ],

  providers: [SharedService, LetterBindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
