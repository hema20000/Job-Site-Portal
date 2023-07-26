import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersUpdateComponent } from './jobseekers-update.component';

describe('JobseekersUpdateComponent', () => {
  let component: JobseekersUpdateComponent;
  let fixture: ComponentFixture<JobseekersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
