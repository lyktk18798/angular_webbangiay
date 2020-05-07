import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {lstSizes} from '../constants/Constants';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  lstSizes = lstSizes;
  product : Product;
  productId: string;
  returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/';
  quantity: number = 1;
  size: number = 37;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductById();
    });
  }

  getProductById(){
    this.productService.getProductById(this.productId).subscribe(response => {
      this.product = response;
      this.product.discount = 0.2;
    }, error => {
      alert(`${error.error}`);
      this.router.navigate([this.returnUrl]);
    });
  }

  addToCart(){
    let prod = this.product;
    prod.quantity = this.quantity;
    prod.size = this.size;
    this.shoppingCartService.addToCart(prod);
    this.shoppingCartService.emitChange(this.shoppingCartService.getCarts().length)
  }

}
