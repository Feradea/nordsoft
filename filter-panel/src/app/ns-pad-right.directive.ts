import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ns-pad-right]'
})
export class NsPadRightDirective {
  @Input('ns-pad-right') paddingSize: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.paddingRight = this.paddingSize;
    console.log("paddingSize:" + this.paddingSize);
  }


}


