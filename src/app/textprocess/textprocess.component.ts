import {Component, OnInit} from '@angular/core';
import {TextUppercaseService} from './text-uppercase.service';
import {TextReverseService} from './text-reverse.service';
import {TextReverseUppercaseService} from './text-reverse-uppercase.service';
import {TextRepositoryService} from './text-repository.service';

@Component({
  selector: 'app-textprocess',
  templateUrl: './textprocess.component.html',
  styleUrls: ['./textprocess.component.css'],
  providers: [TextUppercaseService,
    TextReverseService ,
    TextReverseUppercaseService,
    TextRepositoryService]
})
export class TextprocessComponent implements OnInit {


   originalText = ''  ;
   upperCaseText: string;
   reversedText: string;
   reverseUpperCaseText: string;
  textList = [];


  constructor(private upperCaseService: TextUppercaseService,
              private reverseTextService: TextReverseService,
              private reverseUpperCaseTextService: TextReverseUppercaseService,
              private repositoryService: TextRepositoryService
              ) { }

  onTextChange() {
    // console.log(this.originalText    );
    this.upperCaseText =    this.upperCaseService.convertToUppercase(this.originalText  );
    this.reversedText = this.reverseTextService.reverseString(this.originalText);
    this.reverseUpperCaseText = this.reverseUpperCaseTextService.convertToReverseUpperCase(this.originalText);
  }

  addStringToPile() {
    this.repositoryService.addElement(this.originalText   ,  this.upperCaseText, this.reverseUpperCaseText );
    this.textList = this.repositoryService.getTextList();
  }


  ngOnInit() {

    this.repositoryService.elementAddedEvent.subscribe(
      (data : {originalText: string ,
        uppercaseText: string,
        reverseText: string}) => {

        console.log(data);

    } )
  }
}
