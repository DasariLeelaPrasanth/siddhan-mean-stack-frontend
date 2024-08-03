// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage : any = ''

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
        , private jwtHelper: JwtHelperService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        localStorage.removeItem('token');
    }

    onSubmit() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.authService.login(email, password).subscribe(
                (res:any) => {
                  console.log(res,"resres");
                  
                    if (res && res.token) {
                        localStorage.setItem('token', res.token); // Save token in local storage
                         let userRole = this.authService.getRole()
                      
                        console.log(userRole,"userRole");
                        
                        if (userRole === 'Admin') {
                            this.router.navigate(['/dashboard']);
                        } else {
                            this.router.navigate(['/reports']);
                        }
                    } else if(res && res.status == 'User not found'){
                        this.errorMessage = "User not found";

                    }
                    else if(res && res.status == 'Invalid credentials'){
                      this.errorMessage = "Invalid Credentials";

                  }
                },
                err => {
                    console.error('Login failed', err);
                    this.errorMessage = "Error in logging in";

                }
            );
        }
    }

    routeToRegister() {
        this.router.navigate(['/register']);
    }
}
