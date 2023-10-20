import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //s1

@Injectable({
  providedIn: 'root'
})
export class MyServeService {
apiUrl:string="https://jsonplaceholder.typicode.com/todos/" //s3
  constructor(private http:HttpClient) { } //s2
  getToDos(){
    return this.http.get(this.apiUrl) //s4
  }
}
