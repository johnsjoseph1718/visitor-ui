import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class ReportsComponent implements OnInit {

  private dashboardService = inject(DashboardService);
  private cdr = inject(ChangeDetectorRef);
  reports: any[] = [];

  ngOnInit(): void {

    this.loadReport();

  }

  loadReport(): void {

    this.dashboardService
      .getReport()
      .subscribe({

       next: (response: any) => {

  this.reports = [...response.response];

  this.reports.sort(
    (a, b) => a.visitorId - b.visitorId
  );

  this.cdr.detectChanges();


        

},
        error: (error: any) => {

          console.error(error);

        }

      });

  }

}