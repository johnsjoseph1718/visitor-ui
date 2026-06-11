import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedVisitorsComponent } from './completed-visitors';

describe('CompletedVisitorsComponent', () => {
  let component: CompletedVisitorsComponent;
  let fixture: ComponentFixture<CompletedVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedVisitorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedVisitorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
