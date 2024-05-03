import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerData = {
    username: '',
    email: '',
    password: ''
  };

  onRegisterSubmit() {
    // Add your registration logic here
    console.log('Register form submitted', this.registerData);
  }


}
