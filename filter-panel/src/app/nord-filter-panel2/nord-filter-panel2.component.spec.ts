import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NordFilterPanel2Component } from './nord-filter-panel2.component';

describe('NordFilterPanel2Component', () => {
  let component: NordFilterPanel2Component;
  let fixture: ComponentFixture<NordFilterPanel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NordFilterPanel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NordFilterPanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
