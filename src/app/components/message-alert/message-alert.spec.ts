import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAlert } from './message-alert';

describe('MessageAlert', () => {
  let component: MessageAlert;
  let fixture: ComponentFixture<MessageAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
