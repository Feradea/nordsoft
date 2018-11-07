import { Directive, ElementRef, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[ns-pad-left]'
})
export class NsPadLeftDirective {
  @Input('ns-pad-left') paddingSize: string;

  constructor(private el: ElementRef) {}

  private nsPadLeft(paddingSize : string){
    this.el.nativeElement.style.paddingLeft = paddingSize;
  }

  ngOnInit(){
    this.nsPadLeft(this.paddingSize);
  }

}





