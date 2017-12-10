import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {

  constructor(el: ElementRef) { 
   		el.nativeElement.style.backgroundColor = 'yellow';
	}

}
