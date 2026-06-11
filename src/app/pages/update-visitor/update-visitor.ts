import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-update-visitor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-visitor.html',
  styleUrls: ['./update-visitor.css']
})
export class UpdateVisitorComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dashboardService = inject(DashboardService);

visitorId = 0;
  name = '';
  phoneNumber = '';
  birthDate = '';

ngOnInit(): void {

  const id =
    Number(this.route.snapshot.paramMap.get('visitorId'));

  if (id > 0) {

    this.visitorId = id;

  }

}

updateVisitor(): void {

  if (this.visitorId <= 0) {

    alert('Please Enter Visitor Id');
    return;

  }

  this.dashboardService
    .updateVisitor(
      this.visitorId,
      {
        name: this.name,
        phoneNumber: this.phoneNumber,
        birthDate: this.birthDate
      }
    )
    .subscribe({
      next: () => {

        alert('Visitor Updated Successfully');

        this.router.navigate(['/visitors']);

      },

      error: (error: any) => {

        console.error(error);

      }

    });

}

}