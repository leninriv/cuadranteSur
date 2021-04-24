import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageInputComponent } from './upload-image-input.component';

describe('UploadImageInputComponent', () => {
  let component: UploadImageInputComponent;
  let fixture: ComponentFixture<UploadImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
