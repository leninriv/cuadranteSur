import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimonyPensionsComponent } from './alimony-pensions.component';

describe('AlimonyPensionsComponent', () => {
  let component: AlimonyPensionsComponent;
  let fixture: ComponentFixture<AlimonyPensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimonyPensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimonyPensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
