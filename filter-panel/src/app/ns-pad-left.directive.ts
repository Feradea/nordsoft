import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[ns-pad-left]'
})
export class NsPadLeftDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.paddingLeft = "16px";
  }

 
}





