import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CapChecklist } from './capCheckList';
import { MapChecklist } from './mapCheckList';
import { CAPCHECKLIST } from "./mock-data/mock_cap";
import { MAPCHECKLIST } from './mock-data/mock_map';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MapCapServiceService {

  public mapdb = "mapCheckList";
  public capdb = "capCheckList";
  public database = "dbCheckList";

  mapList : AngularFireList<MapChecklist>;
  capList : AngularFireList<CapChecklist>;
  dbList  : AngularFireList<CapChecklist>;

  constructor(private db: AngularFireDatabase) { 
    this.mapList = db.list(this.mapdb);
    this.capList = db.list(this.capdb);
    this.dbList = db.list(this.database);
  }

  getMapList(): AngularFireList<MapChecklist> {
    return this.mapList;
  }

  getCapList(): AngularFireList<CapChecklist> {
    return this.capList;
  }

  getDBList(): AngularFireList<CapChecklist> {
    return this.capList;
  }

  updateCapList(key: string, value: any): void {
    this.capList.update(key, value).catch(error => this.handleError(error));
  }

  updateMapList(key: string, value: any): void {
    this.mapList.update(key, value).catch(error => this.handleError(error));
  }

  updateDBList(key: string, value: any): void {
    this.dbList.update(key, value).catch(error => this.handleError(error));
  }

  /**
   * getting checklists of CAP class
   */
  getCapCheckListData(): Observable<CapChecklist[]> {
    return of(CAPCHECKLIST);
  }



  /**
   * getting checklists of MAP class
   */
  getMapCheckListData(): Observable<MapChecklist[]> {
    return of(MAPCHECKLIST);
  }

  private handleError(error) {
    console.log(error);
  }

}
