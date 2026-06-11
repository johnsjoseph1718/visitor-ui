import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  CreateVisitComponent } from './create-visit';

describe('CreateVisitComponent', () => {
  let component: CreateVisitComponent;
  let fixture: ComponentFixture<CreateVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVisitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateVisitComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
