import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs';

/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'form-field-custom-control-example',
  templateUrl: 'form-field-custom-control-example.html',
  styleUrls: ['form-field-custom-control-example.css'],
})
export class FormFieldCustomControlExample {}

/** Data structure for holding telephone number. */
class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}

/** Custom `MatFormFieldControl` for telephone number input. */
@Component({
  selector: 'example-tel-input',
  templateUrl: 'example-tel-input-example.html',
  styleUrls: ['example-tel-input-example.css'],
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
  // host: {
  //   '[class.example-floating]': 'shouldLabelFloat',
  //   '[id]': 'id',
  //   '[attr.aria-describedby]': 'describedBy',
  // }
})
class MyTelInput implements MatFormFieldControl<MyTel>{

  parts: FormGroup;
  stateChanges = new Subject<void>();

  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder) {
    this.parts =  fb.group({
      'area': '',
      'exchange': '',
      'subscriber': '',
    });
  }

  ngOnDestroy() {
  this.stateChanges.complete();
}

  // ngOnDestroy() {
  //   this.stateChanges.complete();
  //   this.fm.stopMonitoring(this.elRef);
  // }

  // setDescribedByIds(ids: string[]) {
  //   this.describedBy = ids.join(' ');
  // }

  // onContainerClick(event: MouseEvent) {
  //   if ((event.target as Element).tagName.toLowerCase() != 'input') {
  //     this.elRef.nativeElement.querySelector('input')!.focus();
  //   }
  // }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */