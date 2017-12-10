import { Injectable, } from '@angular/core';
import { SpecificComponent } from '../left/specific/specific.component';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'

@Injectable()
export class LetterBindService {

  public animate: boolean;

  public toggle(){
  	this.animate = !this.animate;
  }

  constructor() { }

}
