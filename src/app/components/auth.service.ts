import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthDataModel} from './auth-data.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = '';
  private tokenTimer: any;
  private isAuthenticated = false;
  private authStatus = new Subject();
  constructor(private http: HttpClient, private router: Router) {}

  getAuthStatus() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatus.asObservable();
  }
  getToken() {
    return this.token;
  }
  createUser(email: string, password: string) {
    const authData: AuthDataModel = {email: email, password: password};
    this.http.post('http://192.168.2.30:3000/api/user/signup', authData).subscribe(response => {
      console.log(response);
    });
  }
  login(email: string, password: string) {
    const authData: AuthDataModel = {email: email, password: password};
    this.http.post<{token: string, expiresIn: number}>('http://192.168.2.30:3000/api/user/login', authData).subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresIn = response.expiresIn;
        this.setAuthTimeout(expiresIn);
        this.isAuthenticated = true;
        this.authStatus.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresIn * 1000);
        this.saveAuthData(token, expirationDate);
        this.router.navigate(['/']);
      }
    });
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.setAuthTimeout(expiresIn / 1000);
      this.isAuthenticated = true;
      this.authStatus.next(true);
    }
  }
  private setAuthTimeout(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  logout() {
    this.token = '';
    this.isAuthenticated = false;
    this.authStatus.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    };
  }
}
