import { Component, OnInit } from '@angular/core';
import { MapCapServiceService } from '../map-cap-service.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { CapChecklist } from '../capCheckList';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.css']
})
export class CapComponent implements OnInit {
  KEY: any = 'CapCheckList';
  capListData: any;
  capList: any;
  items: Observable<any[]>;

  constructor(public local: LocalStorageService, public session: SessionStorageService, public mapCapService: MapCapServiceService, public db: AngularFireDatabase) { 
    //this.items = db.list('mapCheckList').valueChanges();
    //console.log(this.items); 
  }

  ngOnInit() {
    //this.initialize();
    this.getCapListData();

  }

  getCapListData(): void{
    this.mapCapService.getCapList().valueChanges().pipe(
      // map(changes =>
      //   changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      // )
  ).subscribe(capList => {this.capList = capList});
  }


  //
  initialize(): void {
    this.capList = this.local.get(this.KEY);
    console.log(this.capList);
    if (!this.capList) {
      this.capList = this.getCapCheckList();
      console.log(this.capList);
      this.local.set(this.KEY, this.capList);
    }

  };



  /**
   * getting CAP data from mapCapService
   */
  getCapCheckList(): CapChecklist[] {
    this.mapCapService.getCapCheckListData().subscribe(data => this.capListData = data);
    console.log(this.capListData);
    return this.capListData;
  }

  /**
   * edit respose after Checked
   */
  editResponse(id): void {

    this.capList[id - 1].status = false;
    this.capList[id - 1].isEditEnable = false;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.capList[id-1]);

  }

  /**
  * making input field as red color
  */
  crossResponse(id): void {
    this.capList[id - 1].status = false;
    this.capList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.capList[id-1]);

  }

  /**
  * making input field as greeb color
  */
  yesResponse(id): void {
    this.capList[id - 1].status = true;
    this.capList[id - 1].isEditEnable = true;
    //this.local.set(this.KEY, this.capList);
    this.mapCapService.updateCapList((id-1).toString(), this.capList[id-1]);
  }

}
