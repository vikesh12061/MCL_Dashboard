import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';
import { PersonalInfo } from '../personal-info';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList :  PersonalInfo[];
  constructor(public dataService:DataService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxLoader.start();
    // this.dataService.getDetails().subscribe(data => {
    //   console.log("Subscribe: ", data);
  	// 	data.map( test =>{
  	// 		console.log("Map: ", test.payload.doc.data());
  	// 	});  
    //   this.userList = data;
    //   this.ngxLoader.stop();
    // });
    var x = this.dataService.getDetails();
    x.snapshotChanges().subscribe(item =>{
      this.userList=[];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key; 
        this.userList.push(y as PersonalInfo);
       
      })
      this.ngxLoader.stop();
      
    })
    console.log(this.userList);     
  }

  

 
}
