import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersListComponent } from './jobseekers-list.component';

describe('JobseekersListComponent', () => {
  let component: JobseekersListComponent;
  let fixture: ComponentFixture<JobseekersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
