import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appPredefinedStyling]'
})
export class PredefinedStylingDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log( this.element.nativeElement);
    this.element.nativeElement.style.color = 'blue';
    this.element.nativeElement.style.fontSize = '24px' ;
  }



}
