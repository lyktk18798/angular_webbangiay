import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {baseUrl} from '../components/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProductByGroup(groupId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}product/v1/getProductByGroup/${groupId}`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}product/v1/getProductById/${productId}`);
  }

  getSellingProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}product/v1/getSellingProduct`);
  }

  search(name: string, groupId: string, color: string, category: string): Observable<Product[]> {
    const params = new HttpParams()
    .set('name', name)
    .set('color', color)
    .set('category', category)
    .set('groupId', groupId);
    return this.http.get<Product[]>(`${baseUrl}product/v1/search`, {params: params});
  }

}
