import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NordFilterPanelComponent } from './nord-filter-panel.component';

describe('NordFilterPanelComponent', () => {
  let component: NordFilterPanelComponent;
  let fixture: ComponentFixture<NordFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NordFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NordFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
