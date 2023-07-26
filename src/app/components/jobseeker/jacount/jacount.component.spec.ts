import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacountComponent } from './jacount.component';

describe('JacountComponent', () => {
  let component: JacountComponent;
  let fixture: ComponentFixture<JacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
