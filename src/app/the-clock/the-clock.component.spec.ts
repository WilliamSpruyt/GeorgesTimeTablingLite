import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheClockComponent } from './the-clock.component';

describe('TheClockComponent', () => {
  let component: TheClockComponent;
  let fixture: ComponentFixture<TheClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
