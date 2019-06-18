import { Component, OnInit } from '@angular/core';
import { MapCapServiceService } from '../map-cap-service.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DBChecklist } from '../dbCheckList';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  dbList: any;
  items: Observable<any[]>;

  constructor(public mapCapService: MapCapServiceService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getDBListData();
  }
  
  getDBListData(): void{
    this.mapCapService.getCapList().valueChanges().pipe()
    .subscribe(dbList => {this.dbList = dbList});
  }

  /**
   * edit respose after Checked
   */
  editResponse(id): void {

    this.dbList[id - 1].status = false;
    this.dbList[id - 1].isEditEnable = false;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.dbList[id-1]);

  }

  /**
  * making input field as red color
  */
  crossResponse(id): void {
    this.dbList[id - 1].status = false;
    this.dbList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.dbList[id-1]);

  }

  /**
  * making input field as greeb color
  */
  yesResponse(id): void {
    this.dbList[id - 1].status = true;
    this.dbList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.dbList[id-1]);
  }
}
