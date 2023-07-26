import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobPostedComponent } from './view-job-posted.component';

describe('ViewJobPostedComponent', () => {
  let component: ViewJobPostedComponent;
  let fixture: ComponentFixture<ViewJobPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobPostedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
