import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordScreenComponent } from './record-screen.component';

describe('RecordScreenComponent', () => {
  let component: RecordScreenComponent;
  let fixture: ComponentFixture<RecordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
