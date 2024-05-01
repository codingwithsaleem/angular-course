import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  template: `
    <p class="color">
      inline-component works!
    </p>
  `,
  styles: [`
    .color {
      color: red;
    }
  `
  ]
})
export class InlineComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
