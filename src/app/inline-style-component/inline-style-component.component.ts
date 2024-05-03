import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style-component',
  templateUrl: './inline-style-component.component.html',
  styles: [
  ]
})
export class InlineStyleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // counter app 

  counter: number = 0;

  incrementCounter(){
    this.counter++;
}

  decrementCounter(){
    if(this.counter > 0){
    this.counter--;
  }

  }
}
