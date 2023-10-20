import { Component, OnInit } from '@angular/core';
import { MyServeService } from '../myserve.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  toDo: any[] = [];
  constructor(private myserve: MyServeService) { }
  ngOnInit(): void {
    this.myserve.getToDos()

      .subscribe((data: any) => {
        this.toDo = data
      }) //s6 or console.log(this.data)

  }


}
