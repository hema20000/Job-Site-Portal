import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersUpdateComponent } from './employers-update.component';

describe('EmployersUpdateComponent', () => {
  let component: EmployersUpdateComponent;
  let fixture: ComponentFixture<EmployersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
