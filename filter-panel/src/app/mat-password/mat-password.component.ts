import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-mat-password',
  templateUrl: './mat-password.component.html',
  styleUrls: ['./mat-password.component.css']
})
export class MatPasswordComponent implements OnInit {
  hide = true;

  mouseDown() {
    this.hide = false;
  }

  mouseUp() {
    this.hide = true;
  }

  constructor() {}

  ngOnInit() {

  }

}
