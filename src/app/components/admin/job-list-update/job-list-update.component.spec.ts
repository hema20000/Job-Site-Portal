import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListUpdateComponent } from './job-list-update.component';

describe('JobListUpdateComponent', () => {
  let component: JobListUpdateComponent;
  let fixture: ComponentFixture<JobListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
