import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { isNull } from 'util';
import { empty } from 'rxjs';

@Component({
  selector: 'app-mat-password',
  templateUrl: './mat-password.component.html',
  styleUrls: ['./mat-password.component.css']
})
export class MatPasswordComponent implements OnInit {

  // set default value for visibility (user password)
  hide = true;
  hidden = true;

  //Without FormGroup
  passwordControl = new FormControl('', Validators.required);
  passwordConfirmControl = new FormControl('');

  //Without Form Builder
  // passwordForm = new FormGroup({
  //   passwordControl: new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   passwordConfirmControl: new FormControl(''),
  // });

  // With FormBuilder
  // passwordForm = this.fb.group({
  //   passwordControl: ['', Validators.required],
  //   passwordConfirmControl: ['']
  // });

  passwordChecker() {
    if (this.passwordConfirmControl.value !== "") {
      if (this.passwordControl.value === this.passwordConfirmControl.value) {
        return false;
      }
      else {
        this.passwordConfirmControl.setErrors({ 'invalid': true });
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }


}
