import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-fetch-userbydob',
  templateUrl: './fetch-userbydob.component.html',
  styleUrls: ['./fetch-userbydob.component.css']
})
export class FetchUserbydobComponent implements OnInit {

  constructor(private route:Router,private ss:CommonService,private rout:ActivatedRoute) { }
  users:User;
  ngOnInit(): void {
       this.ss.getUserbydob().subscribe(e => 
          {
            this.users= e;
            console.log(this.users);
          });
  }

}
