import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalInfo, Address } from './personal-info';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public basePath = "/users";
  userList : AngularFireList<any>;

  personalDetail=[];

  constructor(private db: AngularFireDatabase) { }

  public saveDetails(pinfo: PersonalInfo){
    //this.personalDetail.push(pinfo);
    const obj = this.db.database.ref(this.basePath);
    obj.push(pinfo);
    console.log('Success');
  }

  public getDetails(){
    //return this.personalDetail;
    return this.db.list(this.basePath)
  }
}
