import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderCompaniesSocietiesComponent } from './shareholder-companies-societies.component';

describe('ShareholderCompaniesSocietiesComponent', () => {
  let component: ShareholderCompaniesSocietiesComponent;
  let fixture: ComponentFixture<ShareholderCompaniesSocietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholderCompaniesSocietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderCompaniesSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
