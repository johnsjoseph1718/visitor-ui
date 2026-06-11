import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-cards.html',
  styleUrls: ['./dashboard-cards.css']
})
export class DashboardCardsComponent implements OnChanges { 
  @Input() dashboard: any;
   ngOnChanges(changes: SimpleChanges): void {
  console.log('Dashboard Input Changed:', this.dashboard);

  }
  @Output() scheduledClick = new EventEmitter<void>();
 @Output() waitingClick = new EventEmitter<void>();
 @Output() completedClick = new EventEmitter<void>();
 @Output() cancelledClick = new EventEmitter<void>();
 @Output() rejectedClick = new EventEmitter<void>();


  onScheduledCardClick(): void {
    this.scheduledClick.emit();
  }
  onWaitingCardClick(): void {
    this.waitingClick.emit();
  }
  onCompletedCardClick(): void {
    this.completedClick.emit();
  }
  onCancelledCardClick(): void {
    this.cancelledClick.emit();
  }
  onRejectedCardClick(): void {
    this.rejectedClick.emit();
  }
}
