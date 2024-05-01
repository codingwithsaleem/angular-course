import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cousre';
  name = 'John';
  age = 25;

   
  // Method
  student(age: number, name: string) {
    
    if (age > 18) {
      return 'Welcome ' + name;
    }
    else {
      return 'You are not allowed to enter';
    }
  }

  

  
  
}
