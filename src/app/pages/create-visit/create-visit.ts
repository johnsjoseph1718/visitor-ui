import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DashboardService } from '../../core/services/dashboard.service';
import { MessageAlertComponent } from '../../components/message-alert/message-alert';

@Component({
  selector: 'app-create-visit',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageAlertComponent],
  templateUrl: './create-visit.html',
  styleUrls: ['./create-visit.css']
})
export class CreateVisitComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dashboardService = inject(DashboardService);

  visitorId: number | null = null;
  visitDate = '';

  successMessage = '';
  errorMessage = '';
  ngOnInit(): void {

    const id =
      Number(this.route.snapshot.paramMap.get('visitorId'));

    if (id>0) {
      this.visitorId = id;
    

    }
  }

  createVisit(): void {

    this.dashboardService
      .createVisit({
        visitorId: this.visitorId,
        visitDate: this.visitDate
      })
      .subscribe({

        next: () => {

          this.successMessage =
  'Visit Created Successfully';

setTimeout(() => {
  this.successMessage = '';
}, 3000);

          this.router.navigate(['/visitors']);

        },

        error: (error: any) => {


          this.errorMessage =
  'Error occurred while creating visit';
setTimeout(() => {
  this.errorMessage = '';
}, 3000);

        }

      });

  }

}