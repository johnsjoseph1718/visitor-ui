import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-cancel-visit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cancel-visit.html',
  styleUrls: ['./cancel-visit.css']
})
export class CancelVisitComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dashboardService = inject(DashboardService);

  visitId = 0;

  reasonType = '';
  comments = '';

  ngOnInit(): void {

    this.visitId =
      Number(this.route.snapshot.paramMap.get('visitorId'));

  }

  cancelVisit(): void {

    this.dashboardService
      .cancelVisit(
        this.visitId,
        {
          reasonType: this.reasonType,
          comments: this.comments
        }
      )
      .subscribe({

        next: () => {

          alert('Visit Cancelled');

          this.router.navigate(['/visitors']);

        },

        error: (error: any) => {

          console.error(error);

        }

      });

  }

}