import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  UpdateVisitorComponent } from './update-visitor';

describe('UpdateVisitorComponent', () => {
  let component: UpdateVisitorComponent;
  let fixture: ComponentFixture<UpdateVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVisitorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateVisitorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
