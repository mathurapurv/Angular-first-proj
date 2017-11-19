import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightStyling]'
})
export class HighlightStylingDirective implements OnInit {

  @HostBinding('style.fontFamily')
  fontFamily: string = 'Times New Roman';

  constructor( private elementRef: ElementRef ,
               private renderer: Renderer2) { }


  ngOnInit(): void {

    this.renderer.setStyle(this.elementRef.nativeElement ,
      'color' ,
      'red'    );
    this.renderer.setStyle(this.elementRef.nativeElement ,
      'background-color' ,
      'yellow'    );

    this.renderer.addClass(this.elementRef.nativeElement , 'text-bold');

  }

  @HostListener('mouseenter')
  onMouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement ,
      'background-color' ,
      'pink'    );
    this.fontFamily = 'Calibri';
  }


  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement ,
      'background-color' ,
      'yellow'    );
    this.fontFamily = 'Times New Roman';
  }





}
