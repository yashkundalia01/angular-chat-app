import { Component } from '@angular/core';
import { firebaseConfig } from '../environment';

@Component({
  selector: 'angular-chat-app-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  title = 'src-app-authenticate';
}
