import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cousre';
  name:string ='';
  age:number;
  displayName: string =''
  displayAge: number;

  // Object

  

   
  // Method
  student(age: number, name: string) {
    
    if (age > 18) {
      return 'Welcome ' + name;
    }
    else {
      return 'You are not allowed to enter';
    }
  }

  myTestFunction(arg1: string, arg2: number, arg3:boolean){
    
       alert(arg1 + arg2 + arg3);
  }


  getUserName(value: string){

    this.displayName = value;


  }

  getUserAge(value2: number){

    this.displayAge = value2;


  }


  employee = [
    {
      employeeName: 'saleem',
      employeeAge: 25,
      employeeId: 1
    },
    {
      employeeName: 'Ali',
      employeeAge: 30,
      employeeId: 2
    },
    {
      employeeName: 'Ahmed',
      employeeAge: 35,
      employeeId: 3
    }
  ]

  toggle = false;

  toggleDiv(){
    this.toggle = !this.toggle;
  }
  

  
  
}
