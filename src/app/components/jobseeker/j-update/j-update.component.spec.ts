import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JUpdateComponent } from './j-update.component';

describe('JUpdateComponent', () => {
  let component: JUpdateComponent;
  let fixture: ComponentFixture<JUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
