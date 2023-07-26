import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallapplicationforperticularjobComponent } from './viewallapplicationforperticularjob.component';

describe('ViewallapplicationforperticularjobComponent', () => {
  let component: ViewallapplicationforperticularjobComponent;
  let fixture: ComponentFixture<ViewallapplicationforperticularjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallapplicationforperticularjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallapplicationforperticularjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
