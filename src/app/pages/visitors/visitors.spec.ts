import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsComponent } from './visitors';

describe('Visitors', () => {
  let component: VisitorsComponent;
  let fixture: ComponentFixture<VisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
