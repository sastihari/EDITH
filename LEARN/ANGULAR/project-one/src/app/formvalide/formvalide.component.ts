import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-formvalide',
  templateUrl: './formvalide.component.html',
  styleUrls: ['./formvalide.component.scss']
})
export class FormvalideComponent {
// employee=new Employee("lucifer","madara")
employee=new Employee("","","","","","","")
show:boolean=false;
sub(){
  this.show=true;
  console.log(this.employee);
  
}



}
