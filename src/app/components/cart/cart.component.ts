import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../service/shopping-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  page = 1;
  pageSize = 3;
  lstRs: Product[] = [];
  quantity: number;
  constructor(private shoppingCartService: ShoppingCartService) { }
  headers = ['','Product', 'Price', 'Quantity', ''];
  @Input() quantityProducts = 0;
  ngOnInit() {
    this.lstRs = this.shoppingCartService.getCarts();
  }
  delete(item: Product){
    this.shoppingCartService.removeToCart(item.id);
    this.shoppingCartService.emitChange(this.shoppingCartService.getCarts().length);
    this.lstRs = this.shoppingCartService.getCarts();
  }
}
