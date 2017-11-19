import {EventEmitter, OnInit} from '@angular/core';

export class TextRepositoryService implements  OnInit {


   public elementAddedEvent   = new EventEmitter<{originalText: string ,
    uppercaseText: string,
    reverseText: string}>();



  private textList: {originalText: string,
    uppercaseText: string,
    reverseText: string}[] = [];


  public getTextList() {
    return this.textList;
  }


  ngOnInit(): void {
    this.textList.push({originalText: 'apurv',
      uppercaseText: 'APURV',
      reverseText: 'vrupa'});
  }

  addElement(originalText: string ,
             uppercaseText: string,
             reverseText: string ) {

    this.textList.push({originalText: originalText,
      uppercaseText: uppercaseText ,
      reverseText: reverseText });

    console.log('size : ' + this.textList.length);

    this.elementAddedEvent.emit({originalText: originalText,
      uppercaseText: uppercaseText ,
      reverseText: reverseText });

  }


}
