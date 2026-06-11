import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  RegisterVisitorComponent } from './register-visitor';

describe('RegisterVisitorComponent', () => {
  let component: RegisterVisitorComponent;
  let fixture: ComponentFixture<RegisterVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVisitorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterVisitorComponent  );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
