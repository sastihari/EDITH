import { Component, OnInit } from '@angular/core';
import { MyServeService } from '../myserve.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  //toDo: any[] = [];


  // get all user
  data: any;


//create new user
  obj:any={};

//get user by id
id:any;
res:any;

//update detai
name:any;
age:any;
role:any;
salary:any;

   constructor(private myserve: MyServeService) { }
  ngOnInit(): void {
    this.getalluser()
  }

  // this.myserve.getToDos()

  //   .subscribe((data: any) => {
  //     this.toDo = data
  //   }) //s6 or console.log(this.data)

// get all user
  getalluser() {
    this.myserve.getuser().subscribe(data1 => {
      this.data = data1;
    })
  }

//create new user
 cnu(){
  

  this.myserve.postuser(this.obj).subscribe(data=>{
    console.log(data);
    
    this.getalluser()
  })
 }

//get user by id

getuserbyid(){

  this.myserve.userbyid(this.id).subscribe(data=>{
    this.getalluser()
    console.log(this.id);
    console.log(data);
    this.res=data;
  })
 }

  //update detail
  updatedetail() {
    
    const data = {
      name: this.name,
      age: this.age,
      role: this.role,
      salary: this.salary
    };
    this.myserve.update(this.id, data).subscribe(
      (data) => {
        this.getalluser();
        console.log(data);
      },
      
    );
  }
  

  
  deleteuserbyid(id: any) {
    this.myserve.deleteUser(id).subscribe(
      (data) => {
        this.getalluser();
        console.log(data);
      },
    
    );
  }
  


}

