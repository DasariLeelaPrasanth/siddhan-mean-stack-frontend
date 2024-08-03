// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  role : any;

  constructor(private authService: AuthService, private router: Router) {
    this.role =  this.authService.getRole();
   }

  logout() {
    this.authService.logout(); // Implement logout method in AuthService
    this.router.navigate(['/login']);
  }
}
