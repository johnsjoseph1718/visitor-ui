import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  CancelVisitComponent } from './cancel-visit';

describe('CancelVisitComponent', () => {
  let component: CancelVisitComponent;
  let fixture: ComponentFixture<CancelVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelVisitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CancelVisitComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
