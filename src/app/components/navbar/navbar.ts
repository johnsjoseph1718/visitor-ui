import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../core/services/page-title.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  @Output() menuClick = new EventEmitter<void>();
  pageTitle = inject(PageTitleService);
  toggleSidebar(): void {
    this.menuClick.emit();
  }

}






