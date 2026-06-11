import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-register-visitor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-visitor.html',
  styleUrls: ['./register-visitor.css']
})
export class RegisterVisitorComponent {

  private dashboardService = inject(DashboardService);
  private router = inject(Router);

  name = '';
  phoneNumber = '';
  birthDate = '';
  visitDate = '';

  successMessage = '';
  errorMessage = '';

  registerVisitor(): void {

    this.dashboardService
      .registerVisitor({
        name: this.name,
        phoneNumber: this.phoneNumber,
        birthDate: this.birthDate,
        visitDate: this.visitDate
      })
      .subscribe({

        next: () => {

          this.successMessage =
            'Visitor Registered Successfully';

          setTimeout(() => {
            this.router.navigate(['/visitors']);
          }, 1500);

        },

        error: () => {

          this.errorMessage =
            'Failed To Register Visitor';

        }

      });

  }

}