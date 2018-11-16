import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsMatPasswordComponent } from './ns-mat-password.component';

describe('NsMatPasswordComponent', () => {
  let component: NsMatPasswordComponent;
  let fixture: ComponentFixture<NsMatPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsMatPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsMatPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
