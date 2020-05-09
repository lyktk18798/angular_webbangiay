import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {baseUrl} from '../components/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  search(searchForm: FormGroup): Observable<User[]> {
    const params = new HttpParams()
    .set('email', searchForm.value.email)
    .set('fullname', searchForm.value.fullname)
    .set('phonenumber', searchForm.value.phonenumber)
    .set('role', searchForm.value.role_user);
    return this.http.get<User[]>(`${baseUrl}user/getAll`, {params: params});
  }

  save(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(`${baseUrl}user/save`, user, httpOptions);
  }

  delete(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(`${baseUrl}user/delete/${id}`, httpOptions);
  }
}
