import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() title: string;
  @Input() users: any[]; 

  /* When ellipsis = true, then class="ellipsis" in test.component.html*/
  /* When ellipsis = false, then class="" in test.component.html*/
  public ellipsis = false;
  
  constructor() {

   }

  ngOnInit() {
  }

  // checkOverflow (element) {
  //   if (element.offsetHeight < element.scrollHeight ||
  //       element.offsetWidth < element.scrollWidth) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
