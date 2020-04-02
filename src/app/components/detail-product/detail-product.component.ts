import { Component, OnInit } from '@angular/core';
import {lstSizes} from '../constants/Constants';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) { }
  lstSizes = lstSizes;
  product : Product;

  ngOnInit() {
    
  }

  addToCart(product: Product){
    console.log(product);
    this.shoppingCartService.addToCart(product);
  }

}
