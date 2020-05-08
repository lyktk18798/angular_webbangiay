import {Component,OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Router} from '@angular/router';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [NgbPaginationConfig]
})
export class CartComponent implements OnInit {
  page = 1;
  pageSize = 3;
  lstRs: Product[] = [];
  quantity: number;

  constructor(private shoppingCartService: ShoppingCartService,
              private router: Router) { }

  headers = ['','Product', 'Price', 'Size', 'Quantity', ''];

  ngOnInit() {
    this.lstRs = this.shoppingCartService.getCarts();
  }

  delete(item: Product){
    this.shoppingCartService.removeToCart(item.id);
    this.shoppingCartService.emitChange(this.shoppingCartService.getCarts().length);
    this.lstRs = this.shoppingCartService.getCarts();
  }

  buyProducts(){
    this.router.navigate(['/info_order']);
  }
  trackByItems(index: number, item: Product): number { return item.id; }

  changeQuantity(value, index){
    this.lstRs[index].quantity = +value;
    //update to localstorage
    this.shoppingCartService.setCarts(this.lstRs);
  }
}
