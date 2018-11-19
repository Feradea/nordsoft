import { Component, OnInit, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormControlDirective, DefaultValueAccessor } from '@angular/forms';

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

  // onChange = (_: any) => { };
  // onTouched = () => { };
  onChange: any = () => { };
  onTouched: any = () => { };
  value: string = '';
  // userPasswdControl = new FormControl('');

  ngOnInit() {
    
  }

  constructor() {}


  // The writeValue method is used 
  // by formControl to set value to the native form control. 
  writeValue(value: any): void {
    this.value = value || '';
  }

  pushChanges(value: any) {
    this.onChange(value);
    console.log("Value2: " + value);
  }

  registerOnChange(fn: (_: any) => {}): void { 
    this.onChange = fn; 
  }
  registerOnTouched(fn: () => {}): void { 
    this.onTouched = fn; 
  }
  setDisabledState?(isDisabled: boolean): void;

}




