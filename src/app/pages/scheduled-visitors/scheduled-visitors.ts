import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-scheduled-visitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduled-visitors.html',
  styleUrls: ['./scheduled-visitors.css']
})
export class ScheduledVisitorsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private dashboardService = inject(DashboardService);
  private cdr = inject(ChangeDetectorRef);
  visitDate = '';
  visitors: any[] = [];
  showConfirmModal = false;
  selectedVisitor: any = null;
  actionType = '';

 ngOnInit(): void {

  this.route.queryParams.subscribe(params => {

    this.visitDate = params['date'];

    console.log('Date Received:', this.visitDate);

    this.loadVisitors();

  });



  }
openConfirmModal(visitor: any, action: string): void {

  this.selectedVisitor = visitor;
  this.actionType = action;
  this.showConfirmModal = true;

}

cancelAction(): void {

  this.showConfirmModal = false;
  this.selectedVisitor = null;
  this.actionType = '';

}

confirmAction(): void {

  if (this.actionType === 'checkin') {

    this.performCheckIn(
      this.selectedVisitor.visitId
    );

  }

  if (this.actionType === 'checkout') {

    this.performCheckOut(
      this.selectedVisitor.visitId
    );

  }

  this.showConfirmModal = false;

}
  loadVisitors(): void {

  this.dashboardService
    .getScheduledVisitors(this.visitDate)
    .subscribe({

      next: (response: any) => {

        console.log('API Response:', response);

        this.visitors = [...response.response];
        this.cdr.detectChanges();

        console.log('Visitors Array:', this.visitors);

      },

      error: (error: any) => {

        console.error(error);

      }

    });


   
  }
performCheckIn(visitId: number): void {

  this.dashboardService
    .checkIn(visitId)
    .subscribe({

      next: () => {

        const visitor =
          this.visitors.find(
            v => v.visitId === visitId
          );

      if (visitor) {

  visitor.checkIn = true;
  visitor.status = 'Waiting';

  this.visitors = [...this.visitors];
  this.cdr.detectChanges();

}
      error: (error:any) => {

        console.error(error);

      }

    },});

}
performCheckOut(visitId: number): void {

  this.dashboardService
    .checkOut(visitId)
    .subscribe({

      next: () => {

        const visitor =
          this.visitors.find(
            v => v.visitId === visitId
          );

      if (visitor) {

  visitor.checkIn = true;
  visitor.status = 'Waiting';

  this.visitors = [...this.visitors];
  this.cdr.detectChanges();

}
      error: (error:any) => {

        console.error(error);

      }

    },});

}
}