import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { HourlyComponent } from './hourly/hourly.component';

const routes: Routes = [
  { path: 'home', component: HourlyComponent},
  { path: '', component: HourlyComponent},
  { path: 'hourly', component: HourlyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
