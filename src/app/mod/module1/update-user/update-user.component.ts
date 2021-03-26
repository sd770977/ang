import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users:any[];
  id : number;
  uid:number;
  constructor(private es:CommonService,private rout:ActivatedRoute,private rt1:Router) { }
  
  ngOnInit(): void {
    this.rout.params.subscribe(params =>
      {
        this.id = params['id'];
        this.es.logcheck(this.id).subscribe(e => 
          {
            this.users= e;
            console.log(this.users);
          });
      });
  }

}
