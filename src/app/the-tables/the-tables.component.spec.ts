import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTablesComponent } from './the-tables.component';

describe('TheTablesComponent', () => {
  let component: TheTablesComponent;
  let fixture: ComponentFixture<TheTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
