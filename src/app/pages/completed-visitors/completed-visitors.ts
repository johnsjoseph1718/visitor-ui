import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-completed-visitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-visitors.html',
  styleUrls: ['./completed-visitors.css']
})
export class CompletedVisitorsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private dashboardService = inject(DashboardService);
  private cdr = inject(ChangeDetectorRef);
  visitDate = '';
  visitors: any[] = [];

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
 
      console.log('Date:', this.visitDate);
      this.visitDate = params['date'];

      this.loadCompletedVisitors();

    });

  }

 loadCompletedVisitors(): void {

  this.dashboardService
    .getCompletedVisitors(this.visitDate)
    .subscribe({

      next: (response: any) => {

        console.log('Completed Response:', response);

        this.visitors = [...response.response];

        this.cdr.detectChanges();

      },

      error: (error: any) => {

        console.error(error);

      }

    });

}}