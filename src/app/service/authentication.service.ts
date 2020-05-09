import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Request} from '../models/request';
import {ActivatedRoute, Router} from '@angular/router';
import {baseUrl, USER_INFO} from '../components/constants/Constants';
import {Customer} from '../models/customer';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/';
  error = '';
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private router: Router) {
  }

  getUserInfo(): Customer {
    return JSON.parse(localStorage.getItem(USER_INFO)) || {};
  }

  setUserInfo(token: string): void {
    localStorage.setItem(USER_INFO, token);
  }

  login(user: Request) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(`${baseUrl}customer/v1/login`, user, httpOptions);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(USER_INFO);
    this.router.navigate(['/login']);
  }

  register(user: Customer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(`${baseUrl}customer/v1/register`, user, httpOptions);
  }

  resetPass(email: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(`${baseUrl}customer/v1/forgot-pass/${email}`, httpOptions);
  }
}
