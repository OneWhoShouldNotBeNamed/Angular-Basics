import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Import home component
import { ListComponent } from './list/list.component'; // Import List Component


const routes: Routes = [
  { path: '', component: HomeComponent },              // add default path
  { path: 'list', component: ListComponent }           // add list path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
