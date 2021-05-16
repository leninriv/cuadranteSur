import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisersBlockComponent } from './advisers-block.component';

describe('AdvisersBlockComponent', () => {
  let component: AdvisersBlockComponent;
  let fixture: ComponentFixture<AdvisersBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisersBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
