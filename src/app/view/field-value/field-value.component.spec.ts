import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldValueComponent } from './field-value.component';

describe('FieldValueComponent', () => {
  let component: FieldValueComponent;
  let fixture: ComponentFixture<FieldValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
