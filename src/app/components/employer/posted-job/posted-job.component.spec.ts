import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedJobComponent } from './posted-job.component';

describe('PostedJobComponent', () => {
  let component: PostedJobComponent;
  let fixture: ComponentFixture<PostedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
