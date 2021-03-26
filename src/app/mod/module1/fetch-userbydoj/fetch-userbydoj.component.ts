import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-fetch-userbydoj',
  templateUrl: './fetch-userbydoj.component.html',
  styleUrls: ['./fetch-userbydoj.component.css']
})
export class FetchUserbydojComponent implements OnInit {

  constructor(private route:Router,private ss:CommonService,private rout:ActivatedRoute) { }
  users:User;
  ngOnInit(): void {
       this.ss.getUserbydoj().subscribe(e => 
          {
            this.users= e;
            console.log(this.users);
          });
  }

}
