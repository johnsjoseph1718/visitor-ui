import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledVisitorsComponent } from './scheduled-visitors';

describe('ScheduledVisitorsComponent', () => {
  let component: ScheduledVisitorsComponent;
  let fixture: ComponentFixture<ScheduledVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledVisitorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduledVisitorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
