import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormControlDirective, DefaultValueAccessor, Validators, AbstractControl } from '@angular/forms';

export const PASSWORD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NsMatPasswordComponent),
  multi: true,
};

@Component({
  selector: 'ns-mat-password',
  templateUrl: './ns-mat-password.component.html',
  styleUrls: ['./ns-mat-password.component.css'],
  providers: [PASSWORD_VALUE_ACCESSOR]
})

export class NsMatPasswordComponent implements ControlValueAccessor, OnInit {
  @Input() formControl: FormControl;
  @Input() placeholder: string;
  @Input() confirmHolder: string;

  public passwdControl = new FormControl('', Validators.required);
  public passwdConfirmControl = new FormControl('');

  hide: boolean = true;
  hidden: boolean = true;

  // onChange = (_: any) => { };
  // onTouched = () => { };
  onChange: any = () => { };
  onTouched: any = () => { };
  value: string = '';

  ngOnInit() {

  }

  constructor() {

  }

  // The writeValue method is used 
  // by formControl to set value to the native form control. 
  writeValue(value: any): void {
    this.value = value || '';
    console.log("writeValue: "+ value);
  }

  pushChanges(value: any) {

    if (this.passwdConfirmControl.value !== "") {

      if (this.passwdControl.value === this.passwdConfirmControl.value) {
        this.onChange(value);
        return false;
      }
      else {
        this.passwdConfirmControl.setErrors({'invalid': true });
      }
    }
  
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
    console.log("registerOnChange: ");
  }
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
    console.log("registerOnTouched: ");
  }

  setDisabledState?(isDisabled: boolean): void;

}




