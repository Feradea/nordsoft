import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPasswordComponent } from './mat-password.component';

describe('MatPasswordComponent', () => {
  let component: MatPasswordComponent;
  let fixture: ComponentFixture<MatPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
