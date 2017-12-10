import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { LetterBindService } from '../Services/letter-bind.service';
import { AnimationDirective } from "../Directives/animation.directive";
import { trigger,state,style,animate, transition } from '@angular/animations';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  animations: []
})
export class CenterComponent implements OnInit {

    public animate: boolean;
  	constructor(private sharedService: SharedService, private letterBindService: LetterBindService){ 
       
    }

  	addGoal(goal){	
  		this.sharedService.list.push(goal);
  	}

    toggle(){
      this.letterBindService.toggle();
      this.animate = !this.animate;
    }


  	ngOnInit() {
    
  	}

}
