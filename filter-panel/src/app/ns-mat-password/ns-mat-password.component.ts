import { Component, OnInit, Input, forwardRef, SimpleChange } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, DefaultValueAccessor, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

export const PASSWORD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NsMatPasswordComponent),
  multi: true,
};

@Component({
  selector: 'ns-mat-password',
  templateUrl: './ns-mat-password.component.html',
  styleUrls: ['./ns-mat-password.component.css'],
  providers: [PASSWORD_VALUE_ACCESSOR],
  host: { '(keyup)': 'onTouched($event)' },
})

export class NsMatPasswordComponent implements ControlValueAccessor, OnInit {
  @Input() formControl: FormControl;
  @Input() placeholder: string;
  @Input() confirmHolder: string;

  public passwdControl = new FormControl('', [Validators.required]);
  public passwdConfirmControl = new FormControl('');

  hide: boolean = true;
  hidden: boolean = true;

  _value: any = null;
  public onChange: any = () => { /*Empty*/ };
  public onTouched: any = () => {  /*Empty*/ };

  pushChanges(target: any) {

    console.log("validators:" + this.passwdControl.asyncValidator);

    if (this.passwdControl.value !== "") {
      if (this.passwdConfirmControl.value !== "") {

        if (this.passwdConfirmControl.value === this.passwdControl.value) {

          if (this.passwdControl.value === this.passwdConfirmControl.value) {
            // when passwords match
            this.passwdConfirmControl.setErrors(null);
            this._value = target.value;
            this.onChange(this._value);
          }
        }
        else {
          // when passwords don't match
          this.passwdConfirmControl.setErrors({ 'invalid': true });
          this._value = '';
          this.onChange(this._value);
        }
      }
      else {
        // when config password field is empty
        this._value = '';
        this.onChange(this._value);
      }
    }
    else {
      // when password field is empty
      this._value = '';
      this.onChange(this._value);
    }
  }

  //From ControlValueAccessor interface
  writeValue(obj: any): void {
    console.log('writeValue', obj);
    this._value = obj;
    this.passwdControl.setValue(this._value);
    this.passwdConfirmControl.setValue(this._value);
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void;

  ngOnInit() {
    console.log(this.formControl.errors);
  }

  constructor() {
    
  }

}




