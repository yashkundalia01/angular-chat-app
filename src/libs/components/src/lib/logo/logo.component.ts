import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-chat-app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() height: any = 60;
}
