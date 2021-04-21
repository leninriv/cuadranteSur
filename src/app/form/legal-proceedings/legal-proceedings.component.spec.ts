import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalProceedingsComponent } from './legal-proceedings.component';

describe('LegalProceedingsComponent', () => {
  let component: LegalProceedingsComponent;
  let fixture: ComponentFixture<LegalProceedingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalProceedingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
