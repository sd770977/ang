import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {
  myForm: FormGroup;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      age:[null,[Validators.required,Validators.minLength(2),
      Validators.min(18),Validators.max(65)]],
      agree:[false,[Validators.requiredTrue]],
      phones:this.fb.array([this.fb.control('')])  
    });
  }
  
  get email(){
    return this.myForm.get('email');
  }
  get password(){
    return this.myForm.get('password');
  }
  get age(){
    return this.myForm.get('age');
  }
get phoneForms(){
  return this.myForm.get('phones') as FormArray;
}
addPhone(){
  const phones=this.fb.group({
    area:[],
    prefix:[],
    line:[]
  })
this.phoneForms.push(phones);
}
deletePhone(i){
  this.phoneForms.removeAt(i)
}
setPageSizeOptions(setPageSizeOptionsInput: string) {
  if (setPageSizeOptionsInput) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
}