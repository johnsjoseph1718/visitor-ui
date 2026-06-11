import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-alert.html'
})
export class MessageAlertComponent {

  @Input() type = '';
  @Input() message = '';

}