import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category';
import {Color} from '../models/color';
import {baseUrl} from '../components/constants/Constants';
import {GroupProduct} from '../models/group_product';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor(private http: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}helper/category/getAll`);
  }

  getAllColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${baseUrl}helper/color/getAll`);
  }

  getAllGroups(): Observable<GroupProduct[]> {
    return this.http.get<GroupProduct[]>(`${baseUrl}helper/groupProduct/getAll`);
  }

}
