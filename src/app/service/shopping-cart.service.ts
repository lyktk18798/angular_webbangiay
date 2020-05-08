import { Injectable } from '@angular/core';
import {CART} from '../components/constants/Constants';
import {Product} from '../models/product';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
  constructor() {
  }
  getCarts(): Product[] {
    return JSON.parse(
      localStorage.getItem(CART),
    ) || [];
  }
  setCarts(products: Product[]): void {
    localStorage.setItem(CART, JSON.stringify(products));
  }

  addToCart(product: Product){
    const lstProduct: Product[] = this.getCarts();
    const index = lstProduct.findIndex(item => item.id === product.id);
    if(index > -1){
      lstProduct[index].quantity += product.quantity;
      this.setCarts(lstProduct);
      return;
    }
    this.setCarts([
      ...lstProduct,
      product
    ]);
  }

  removeToCart (id: number){
    const lstProduct: Product[] = this.getCarts();
    this.setCarts(lstProduct.filter(item => item.id !== id));
  }

  removeCart(){
    localStorage.removeItem(CART);
  }

}
