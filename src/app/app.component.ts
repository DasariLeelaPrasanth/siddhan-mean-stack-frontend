// src/app/app.component.ts
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack-app';

  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {

    return this.authService.isLoggedIn();

  }
}
