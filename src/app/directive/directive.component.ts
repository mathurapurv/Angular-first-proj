import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  counterValue: number = 7;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.incrementCounter() , 2000) ;
  }

  incrementCounter() {
    this.counterValue++;
    //console.log('this.counterValue : ' + this.counterValue);
    if (this.counterValue > 15 ) {
      this.counterValue = 0 ;
    }
  }

}
