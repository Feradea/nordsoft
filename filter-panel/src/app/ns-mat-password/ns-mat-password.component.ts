import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'ns-mat-password',
  templateUrl: './ns-mat-password.component.html',
  styleUrls: ['./ns-mat-password.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: MyPassInput }],
})

// export class NsMatPasswordComponent implements OnInit {

//   hide = true;
//   hidden = true;

//   passwordPlaceholder: string = "Enter your password";

//   passwordControl: FormControl;

//   constructor() { }

//   ngOnInit() {

//   }

// }

/** Data structure for holding telephone number. */
export class MyPass {
  constructor(public password: string) { }
}

class MyPassInput {
 
}


class MyPassInput implements MatFormFieldControl<MyPass> {


}


