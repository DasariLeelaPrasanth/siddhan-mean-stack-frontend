// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  role = 'User';
  errorMessage :any;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const user = { email: this.email, password: this.password, role: this.role };
    this.authService.register(user.email,user.password,user.role).subscribe(
      (res : any) => {
        if(res && res.msg && res.msg == 'User already exists'){
          this.errorMessage = "User already exists";
        }else{

          this.router.navigate(['/login']);
        }
        console.log('Registration successful', res);
      },
      err => {
        console.error('Registration failed', err);
      }
    );
  }
}
