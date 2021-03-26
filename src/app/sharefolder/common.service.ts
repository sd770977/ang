import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url="http://localhost:8085/user/get";
  url1="http://localhost:8085/user/fetchuserbyid";
  url2="http://localhost:8085/user/registeruser";
  url3="http://localhost:8085/user/";
  url4="http://localhost:8085/user/update";
  url5="http://localhost:8085/user/soft/remove";
  url6="http://localhost:8085/user/fetchuserbydob";
  url7="http://localhost:8085/user/fetchuserbydoj"; 
  constructor(private http:HttpClient) { }
  userdata:User[];


  logcheck(id) {

    return this.http.get<User[]>(this.url1+"/"+id);
  }
  regUser(u: User) {
      return this.http.post(this.url2, u);
  }
  editUser(id) {
    console.log(id);
    return this.http.get<User>(this.url3+"/" +id); 
  }
  deleteUser(id) {
    console.log(id);
    return this.http.delete<User>(this.url5+"/" +id); 
 }
  updataUser(u)
  {
    console.log(u);
    return this.http.put<User[]>(this.url4, u);
  }
  getdata(){
    return this.http.get<User[]>(this.url);
  }
  getUserbydob() {
    return this.http.get<User>(this.url6); 
 }
 getUserbydoj() {
  return this.http.get<User>(this.url7); 
}
 
}