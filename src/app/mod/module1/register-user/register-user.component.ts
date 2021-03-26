import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { CommonService } from 'src/app/sharefolder/common.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private rs:CommonService) { }
  u = new User();

  ngOnInit(): void {
  }

    onReg() {
      console.log(this.u);
      this.rs.regUser(this.u).subscribe();
      console.log('Data Registered');
    }
}
