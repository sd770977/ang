import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showDivOne = true;
  showDivTwo = false;
  users : any = [];
  idname:number;
  idname1:number;
  idname2:number;
  idname3:number;
  constructor(private route:Router,private ss:CommonService) { }
  fetchDob(){
    this.route.navigate(['user','fetch-dob'])
  }
  reg(){
    this.route.navigate(['user','reg'])
  }
  edit(idname){
    this.route.navigate(['user','edit',idname])
  }
  hardRemove(idname1){
    this.route.navigate(['user','hard-remove',idname1])
  } 
  softRemove(idname2){
    this.route.navigate(['user','soft-remove',idname2])
  } 
  fetchDoj(){
    this.route.navigate(['user','fetch-doj'])
  }
  fetchId(idname3){
    this.route.navigate(['user','fetch',idname3])
  }
  getAllUser(){
    console.log(this.ss.getdata().subscribe());
    this.ss.getdata().subscribe( rs => {
      console.log("================");
      this.users = rs;
      console.log(this.users);
      }); 
      this.showDivOne = false;
      this.showDivTwo = true;
  }
  ngOnInit(): void {

  }
}
