import { Injectable } from '@angular/core';
import {CART} from '../components/constants/Constants';
import {Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
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
    return [
      ...lstProduct,
      product
    ]
  }

  removeToCart (id: number){
    const lstProduct: Product[] = this.getCarts();
    this.setCarts(lstProduct.filter(item => item.id !== id));
  }

}
