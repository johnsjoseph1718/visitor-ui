import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';
import { DashboardCardsComponent } from '../../components/dashboard-cards/dashboard-cards';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DashboardCardsComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardPage implements OnInit {

  private router = inject(Router);
  private dashboardService = inject(DashboardService);
 private cdr = inject(ChangeDetectorRef);
  todayDate = '';

  dashboard = {
    scheduled: 0,
    waiting: 0,
    completed: 0,
    cancelled: 0,
    rejected: 0
  };

  scheduledVisitors: any[] = [];

  ngOnInit(): void {

  console.log('Dashboard Init');

  const today = new Date();

  this.todayDate =
    today.toISOString().split('T')[0];

  this.loadDashboard();
}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

 loadDashboard(): void {

  console.log('Date:', this.todayDate);

  this.dashboardService
    .getDashboard(this.todayDate)
    .subscribe({

      next: (response: any) => {

        console.log('Dashboard Response:', response);

      this.dashboard = response.response;
      this.cdr.detectChanges();
console.log('Dashboard Variable:', this.dashboard);
        console.log('Dashboard Variable:', this.dashboard);

      },

      error: (error: any) => {
        console.error(error);
      }

    });
  }
goToScheduledVisitors(): void {

  this.router.navigate(
    ['/scheduled-visitors'],
    {
      queryParams: {
        date: this.todayDate
      }
    }
  );
}
goToCompletedVisitors(): void {

  this.router.navigate(
    ['/completed-visitors'],
    {
      queryParams: {
        date: this.todayDate
      }
    }
  );

}
}