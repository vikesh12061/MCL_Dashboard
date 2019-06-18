import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CapComponent } from './cap/cap.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DatabaseComponent } from './database/database.component';
import { TimelineFlowComponent } from './timeline/timeline-flow/timeline-flow.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserListComponent } from './user-list/user-list.component';

import { NgxUiLoaderModule, SPINNER } from  'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './highlight.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CapComponent,
    MapComponent,
    DatabaseComponent,
    TimelineFlowComponent,
    TimelineComponent,
    PersonalInfoComponent,
    UserListComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
