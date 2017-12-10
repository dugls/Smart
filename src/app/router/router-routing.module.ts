import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecificComponent } from '../left/specific/specific.component'

const routes: Routes = [
	{path: '', redirectTo: './', pathMatch: 'full'},
	{path: 'specific', component: SpecificComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
