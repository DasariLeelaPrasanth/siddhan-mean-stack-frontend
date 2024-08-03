import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private token: any | null = null;
  private role : any

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  register(email: string, password: string, role: string) {
    return this.http.post(`${this.apiUrl}/register`, { email, password, role });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`,  { email, password });

  }

  isLoggedIn(): boolean {
    this.token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  setRole(role: string): void {
    this.role = role;
}

getRole(): string {
    let token :any = localStorage.getItem('token')
        const decodedToken = this.jwtHelper.decodeToken(token);
        return decodedToken.role;
      
}


  logout(){
    localStorage.removeItem('token'); 

  }
}
