import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearValueComponent } from './year-value.component';

describe('YearValueComponent', () => {
  let component: YearValueComponent;
  let fixture: ComponentFixture<YearValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
