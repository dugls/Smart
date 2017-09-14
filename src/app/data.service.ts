import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) {
  		console.log("ZAPAHALO SUKA DA");
   }
   getGoals(){
   	return this.http.get("http://localhost:3000/api/goals")
   	.map(res => res.json());
   }	

   addGoal(newGoal){
   		var headers = new Headers();
   		headers.append("Content-Type", "application/json");
   		return this.http.post("http://localhost:3000/api/goal", JSON.stringify(newGoal), {headers:headers})
   		.map(res => res.json());

}
  
}
