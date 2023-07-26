import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JregisterComponent } from './jregister.component';

describe('JregisterComponent', () => {
  let component: JregisterComponent;
  let fixture: ComponentFixture<JregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
