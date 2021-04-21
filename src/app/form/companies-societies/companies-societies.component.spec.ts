import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSocietiesComponent } from './companies-societies.component';

describe('CompaniesSocietiesComponent', () => {
  let component: CompaniesSocietiesComponent;
  let fixture: ComponentFixture<CompaniesSocietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesSocietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
