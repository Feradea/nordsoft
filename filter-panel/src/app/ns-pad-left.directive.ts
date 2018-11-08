import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ns-pad-left]'
})

// Solution with Getter & Setter
export class NsPadLeftDirective {
  @Input('ns-pad-left') set paddingSize(value) {
    this.el.nativeElement.style.paddingLeft = value;  
  }

  constructor(private el: ElementRef) { }

}

//Another solution with private function

// export class NsPadLeftDirective {
//   @Input('ns-pad-left') paddingSize: string;

//   constructor(private el: ElementRef) {}

//   private nsPadLeft(paddingSize : string){
//     this.el.nativeElement.style.paddingLeft = paddingSize;
//   }

//   ngOnInit(){
//     this.nsPadLeft(this.paddingSize);
//   }

// }





