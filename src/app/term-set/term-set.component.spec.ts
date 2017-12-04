import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermSetComponent } from './term-set.component';

describe('TermSetComponent', () => {
  let component: TermSetComponent;
  let fixture: ComponentFixture<TermSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
