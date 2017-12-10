import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {JwtHelper} from 'angular2-jwt-session';

@Injectable()
export class AuthService {
  private jwt;

  constructor(private http: HttpClient, private router: Router) {
    this.jwt = new JwtHelper();
  }

  getToken(name: string = 'token'): string {
    return localStorage.getItem(name) || sessionStorage.getItem(name);
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  register(user: User) {
    return this.http.post(`${environment.api.url}/register`, user);
  }

  login(email: string, password: string, keep: boolean) {
    this.http.post(`${environment.api.url}/login`, { email: email, password: password }).subscribe(
      (res: {token: string}) => {
        keep ? localStorage.setItem('token', res.token) : sessionStorage.setItem('token', res.token);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

  getUser(): string {
    return this.jwt.decodeToken(this.getToken()).firstname;
  }

  isAdmin(): boolean {
    return this.jwt.decodeToken(this.getToken()).rank.admin;
  }

  isCoach(): boolean {
    return this.jwt.decodeToken(this.getToken()).rank.admin;
  }

  private decodeToken(): { sub: string, firstname: string } {
    return this.jwt.decodeToken();
  }

}
