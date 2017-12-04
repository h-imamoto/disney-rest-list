import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSetComponent } from './date-set.component';

describe('DateSetComponent', () => {
  let component: DateSetComponent;
  let fixture: ComponentFixture<DateSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
