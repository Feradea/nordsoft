import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NordFilterPanel3Component } from './nord-filter-panel3.component';

describe('NordFilterPanel3Component', () => {
  let component: NordFilterPanel3Component;
  let fixture: ComponentFixture<NordFilterPanel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NordFilterPanel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NordFilterPanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
