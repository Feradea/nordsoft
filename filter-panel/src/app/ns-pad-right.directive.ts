import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ns-pad-right]'
})
export class NsPadRightDirective {
  @Input('ns-pad-right') paddingSize: string;

  constructor(el: ElementRef) {
    el.nativeElement.style.paddingRight = this.paddingSize;
    console.log("paddingSize:" + this.paddingSize);
  }


}


