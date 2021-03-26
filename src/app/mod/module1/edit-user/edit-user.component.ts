import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
users=new User();
id : number;
uid:number;
  constructor(private es:CommonService,private rout:ActivatedRoute,private rt1:Router) { }

  ngOnInit(): void {
this.rout.params.subscribe(params =>
{
  this.id = params['idname'];
  this.es.editUser(this.id).subscribe(e => 
    {
      this.users= e;
      console.log(this.users);
    });
});
}

  onUpdate(id) {
    
        this.es.updataUser(this.users).subscribe();
        this.rt1.navigate(['home/home-up',id]);
  }

}
