import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { MapCapServiceService } from '../map-cap-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MapChecklist } from '../mapCheckList';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  KEY: any = 'CheckList';
  mapListData: any;
  mapList: any;
  constructor(public local: LocalStorageService, public session: SessionStorageService, public mapCapService: MapCapServiceService, public db: AngularFireDatabase) { }

  ngOnInit() {
    //this.initialize();
    this.getMapListData();
  }

  getMapListData(): void{
    this.mapCapService.getMapList().valueChanges().pipe(
  ).subscribe(mapList => {this.mapList = mapList});
  }

  initialize(): void {
    this.mapList = this.local.get(this.KEY);
    console.log(this.mapList);
    if (!this.mapList) {
      this.mapList = this.getMapCheckListData();
      console.log(this.mapList);
      this.local.set(this.KEY, this.mapList);
    }
  };

  /**
   * getting MAP data from mapCapService
   */
  getMapCheckListData(): MapChecklist[] {
    this.mapCapService.getMapCheckListData().subscribe(mapData => this.mapListData = mapData);
    console.log(this.mapListData)
    return this.mapListData;
  }

  /**
   * edit respose after Checked
   */
  editResponse(id): void {

    this.mapList[id - 1].status = false;
    this.mapList[id - 1].isEditEnable = false;
    //this.local.set(this.KEY, this.mapList);
    this.mapCapService.updateMapList((id-1).toString(), this.mapList[id-1]);

  }

  /**
   * making input field as red color
   */
  crossResponse(id): void {
    this.mapList[id - 1].status = false;
    this.mapList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.mapList);
    this.mapCapService.updateMapList((id-1).toString(), this.mapList[id-1]);

  }


  /**
   * making input field as greeb color
   */
  yesResponse(id): void {
    this.mapList[id - 1].status = true;
    this.mapList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.mapList);
    this.mapCapService.updateMapList((id-1).toString(), this.mapList[id-1]);
  }


}
