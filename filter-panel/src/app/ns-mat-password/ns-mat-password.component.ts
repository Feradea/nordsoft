import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators } from '@angular/forms';

export const PASSWORD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NsMatPasswordComponent),
  multi: true,
};

// export const PASSWORD_VALIDATORS: any = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => NsMatPasswordComponent),
//   multi: true,
// };


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

  // public passwdControl = new FormControl('', {
  //   validators: Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#\$%\^&])(?=.{5,})'),
  //   updateOn: 'blur'
  // });
  public passwdControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(5),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  ]));
  public passwdConfirmControl = new FormControl('');

  hide: boolean = true;
  hidden: boolean = true;

  _value: any = null;
  error_message : string;
  onChange: any = () => { /*Empty*/ };
  onTouched: any = () => {  /*Empty*/ };

  password_validation_messages = {
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 character long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'confirm_password': [
      { type: 'notEqual', message: 'Password mismatch' }
    ]

  }

  pushChanges(target: any) {

    let value_a = this.passwdControl;
    let value_b = this.passwdConfirmControl;

    if (value_a.value !== null) {
      if (value_b.value !== null) {
        if (value_a.value === value_b.value) {
          // when passwords match
          value_b.setErrors(null);
          this._value = target.value;
          this.onChange(this._value);
        }
        else {
          // when passwords don't match
          value_b.setErrors({ 'notEqual': true });
          this._value = '';
          this.onChange(this._value);
        }
      }
      else {
        // when confirm password field is empty
        value_b.setErrors(null);
        this._value = '';
        this.onChange(this._value);
      }
    }
    else {
      // when password field is empty
      this._value = '';
      this.onChange(this._value);
    }

    this.error_message='';

    for (let i = 0; i < this.password_validation_messages.password.length; i++) {
      if (this.passwdControl.hasError(this.password_validation_messages.password[i].type)) {
        this.error_message += this.password_validation_messages.password[i].message;
      }
    }

    for (let j = 0; j < this.password_validation_messages.confirm_password.length; j++) {
      if (this.passwdConfirmControl.hasError(this.password_validation_messages.confirm_password[j].type)) {
        this.error_message += this.password_validation_messages.confirm_password[j].message;
      }
    }

    console.log(this.error_message);



    // console.log("Error: " + this.passwdControl.hasError('required'));
    // console.log("Error min: " + this.passwdControl.hasError('minlength'));

    // if (this.passwdControl.value !== "") {
    //   if (this.passwdConfirmControl.value !== "") {

    //     if (this.passwdConfirmControl.value === this.passwdControl.value) {

    //       if (this.passwdControl.value === this.passwdConfirmControl.value) {
    //         // when passwords match
    //         this.passwdConfirmControl.setErrors(null);
    //         this._value = target.value;
    //         this.onChange(this._value);
    //       }
    //     }
    //     else {
    //       // when passwords don't match
    //       this.passwdConfirmControl.setErrors({ 'invalid': true });
    //       this._value = '';
    //       this.onChange(this._value);
    //     }
    //   }
    //   else {
    //     // when config password field is empty
    //     this._value = '';
    //     this.onChange(this._value);
    //   }
    // }
    // else {
    //   // when password field is empty
    //   this._value = '';
    //   this.onChange(this._value);
    // }
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

  }



  constructor() {

  }

}




