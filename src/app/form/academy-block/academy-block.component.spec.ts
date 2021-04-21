import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyBlockComponent } from './academy-block.component';

describe('AcademyBlockComponent', () => {
  let component: AcademyBlockComponent;
  let fixture: ComponentFixture<AcademyBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
