import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from './service/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router,
              private shoppingCartService: ShoppingCartService) {}
  title = 'webbangiay';
  name: string;
  totalProducts: number = 0;

  ngOnInit(): void {
    this.shoppingCartService.changeEmitted$.
    _subscribe(rs => this.totalProducts = rs)
  }

  search () {
    this.router.navigate(['/product-list', 0, this.name, 0, 0]);
  }

  openCart(){
    this.router.navigate(['/cart']);
  }
}
