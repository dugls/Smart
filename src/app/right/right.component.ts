import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

	lists: any[];

  	constructor(sharedService: SharedService) { 
  		this.lists = sharedService.list;
  	}

  	ngOnInit() {
  	}

}
