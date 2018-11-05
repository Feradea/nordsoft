import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appNsPadLeft]'
})
export class NsPadLeftDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.paddingLeft = "16px";
  }

 
}





