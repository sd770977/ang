import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-fetch-userbyid',
  templateUrl: './fetch-userbyid.component.html',
  styleUrls: ['./fetch-userbyid.component.css']
})
export class FetchUserbyidComponent implements OnInit {
id:number;
  users : any = [];
  showDivOne = true;
  showDivTwo = false;
  constructor(private ls:CommonService, private rt : Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params =>
      {
        this.id = params['idname3'];
        this.ls.logcheck(this.id).subscribe(e => 
          {
            this.users= e;
            console.log(this.users);
          });
      });
  }
    delData(uid){
      console.log(this.users.name);
      console.log('Edit ts: '+ uid);
          this.ls.deleteUser(uid).subscribe();
          this.rt.navigate(['home/home-up']);
    }

      editData(uid) {
        console.log('From Display: '+uid);
        this.rt.navigate(['home/home-up', uid]);
        
      }
    
      }
