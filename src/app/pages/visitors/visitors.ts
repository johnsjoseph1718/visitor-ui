import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../core/services/dashboard.service';
@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./visitors.html',
  styleUrls: ['./visitors.css']
})
export class VisitorsComponent {
private router = inject(Router);
  phoneNumber = '';
  

  isSearchMode = false;
  private dashboardService = inject(DashboardService);

searchResult: any = null;
searchVisitor(): void {

  if (!this.phoneNumber) {
    alert('Enter Phone Number');
    return;
  }

  this.dashboardService
    .searchVisitor(this.phoneNumber)
    .subscribe({

      next: (response: any) => {

        this.searchResult = response;

        this.isSearchMode = true;

      },

      error: (error: any) => {

        console.error(error);

        alert('Visitor Not Found');

      }

    });
  }
 
    goToCreateVisit(): void {

  this.router.navigate([
    '/create-visit',
    this.searchResult.visitorId
  ]);

}

goToUpdateVisitor(): void {

  this.router.navigate([
    '/update-visitor',
    this.searchResult.visitorId
  ]);

}

goToCancelVisit(): void {

  this.router.navigate([
    '/cancel-visit',
    this.searchResult.visitorId
  ]);

}
goToRegisterVisitor(): void {

    console.log('Register Clicked');

  this.router.navigate([
    '/register-visitor'
  ]);

}
 goToCreateVisitCard(): void {

  this.router.navigate([
    '/create-visit',
  0
  ]);

}
goToUpdateVisitorCard(): void {

  this.router.navigate([
    '/update-visitor',
    0
  ]);

}
goToCancelVisitCard(): void {

  this.router.navigate([
    '/cancel-visit',
    0
  ]);

}
}

