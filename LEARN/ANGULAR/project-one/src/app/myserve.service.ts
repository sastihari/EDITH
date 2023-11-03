import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //s1

@Injectable({
  providedIn: 'root'
})
export class MyServeService {
  apiUrl:string="http://localhost:3000"


// apiUrl:string="https://jsonplaceholder.typicode.com/todos/" //s3


  constructor(private http:HttpClient) { } //s2


  // getToDos(){
  //   return this.http.get(this.apiUrl) //s4
  // }


  // get all user

  getuser(){
    return this.http.get(this.apiUrl+"/getAllUsers")
  }

  // create new user

  postuser(detail:any){
    console.log(detail)
    return this.http.post(this.apiUrl+"/createUser",detail)
  }

  //get user by id

  userbyid(id:any){
    console.log(id);
    
    return this.http.get(this.apiUrl+"/getUserById/"+id)
  }
  //update detail
  update(id: any, data: any) {
    return this.http.put(this.apiUrl + "/updateUserById/" + id, data);
  }

  //deleteuser
  deleteUser(id: any) {
    return this.http.put(this.apiUrl + "/deleteUserById/" + id, null);
  }
  



}
 