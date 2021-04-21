import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousElectionsBlockComponent } from './previous-elections-block.component';

describe('PreviousElectionsBlockComponent', () => {
  let component: PreviousElectionsBlockComponent;
  let fixture: ComponentFixture<PreviousElectionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousElectionsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousElectionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
