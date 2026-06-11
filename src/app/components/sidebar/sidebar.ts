import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageTitleService } from '../../core/services/page-title.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {

  @Input() isOpen = false;

  @Output() logout = new EventEmitter<void>();

  private pageTitle = inject(PageTitleService);

  setTitle(title: string): void {
    this.pageTitle.title = title;
  }

  close(): void {
    this.isOpen = false;
  }

  onLogout(): void {
    this.logout.emit();
  }
}