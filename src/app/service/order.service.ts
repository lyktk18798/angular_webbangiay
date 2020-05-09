import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseUrl} from '../components/constants/Constants';
import {OrderRequest} from '../models/order.request';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  buyProduct(order: OrderRequest) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(`${baseUrl}order/v1/add`, order, httpOptions);
  }

}
