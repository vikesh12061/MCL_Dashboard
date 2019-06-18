import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CapComponent } from './cap/cap.component';
import { DatabaseComponent } from './database/database.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineFlowComponent } from './timeline/timeline-flow/timeline-flow.component';

const routes: Routes = [
  { path: 'mapCheckList', pathMatch: 'prefix', component: MapComponent }, // to default opening of capCheckList path
  { path: 'capCheckList', pathMatch: 'prefix',  component: CapComponent },
  { path: 'dbCheckList', pathMatch: 'prefix',  component: DatabaseComponent },
  { path: 'timeline', pathMatch: 'prefix',  component: TimelineComponent },
  { path: 'personalinfo', pathMatch: 'prefix',  component: PersonalInfoComponent },
  { path: 'userList', pathMatch: 'prefix',  component: UserListComponent },
  { path: '', redirectTo: '/personalinfo', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
