import {TextUppercaseService} from './text-uppercase.service';
import {TextReverseService} from './text-reverse.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TextReverseUppercaseService {

  constructor(private upperCaseService: TextUppercaseService,
              private reverseTextService: TextReverseService ) {}



   convertToReverseUpperCase(originalText: string) {
    const upperCaseText = this.upperCaseService.convertToUppercase(originalText);
    const reverseUpperCaseText = this.reverseTextService.reverseString(upperCaseText);
    return reverseUpperCaseText;
   }



}
