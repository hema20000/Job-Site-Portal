import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JloginComponent } from './jlogin.component';

describe('JloginComponent', () => {
  let component: JloginComponent;
  let fixture: ComponentFixture<JloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
