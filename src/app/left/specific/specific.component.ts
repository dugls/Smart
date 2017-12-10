import { Component, OnInit} from '@angular/core';
import { LetterBindService } from "../../Services/letter-bind.service";


@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  public letter: string = 'S';

  constructor(private letterBindService: LetterBindService) { }

  animation(){
    
  }

  animate(){
  	if(this.letterBindService.toggle()){
  		this.animation();
  	}
  	else{
  		return 0;
  	}
  }

  ngOnInit() {
  }

}
