import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-mat-password',
  templateUrl: './mat-password.component.html',
  styleUrls: ['./mat-password.component.css']
})
export class MatPasswordComponent implements OnInit {

  // set default value for visibility (user password)
  hide = true;
  hidden = true;

  //Without Form Builder
  // passwordForm = new FormGroup({
  //   passwordControl: new FormControl(''),
  //   passwordConfirmControl: new FormControl(''),
  // });

  // With FormBuilder
  passwordForm = this.fb.group({
    passwordControl: ['', Validators.required],
    passwordConfirmControl: ['', Validators.required]
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.passwordForm.value);
  }

  mouseDown() {
    this.hide = false;
  }

  mouseUp() {
    this.hide = true;
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit() {

  }


}
