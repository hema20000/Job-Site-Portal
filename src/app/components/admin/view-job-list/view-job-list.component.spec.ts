import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobListComponent } from './view-job-list.component';

describe('ViewJobListComponent', () => {
  let component: ViewJobListComponent;
  let fixture: ComponentFixture<ViewJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
