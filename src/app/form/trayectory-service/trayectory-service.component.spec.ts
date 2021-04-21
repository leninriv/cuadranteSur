import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoryServiceComponent } from './trayectory-service.component';

describe('TrayectoryServiceComponent', () => {
  let component: TrayectoryServiceComponent;
  let fixture: ComponentFixture<TrayectoryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayectoryServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
