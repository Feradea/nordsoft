import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNsPadRight]'
})
export class NsPadRightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.paddingRight = "16px";
   }

}

