import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-templete-component',
  template: `
    <p>
      inline-templete-component works!
    </p>
  `,
  styleUrls: ['./inline-templete-component.component.css']
})
export class InlineTempleteComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
