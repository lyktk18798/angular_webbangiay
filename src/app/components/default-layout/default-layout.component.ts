import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {Customer} from '../../models/customer';
import {AuthenticationService} from '../../service/authentication.service';
import {isEmpty} from '../../helpers/helper';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private router: Router,
              private shoppingCartService: ShoppingCartService,
              private authenticationService: AuthenticationService) {}
  title = 'webbangiay';
  name: string;
  totalProducts: number = 0;
  userLogin: Customer;
  isUserLogin: boolean = false;

  ngOnInit() {
    this.totalProducts = this.shoppingCartService.getCarts().length;
    this.getUserLogin();
    this.shoppingCartService.changeEmitted$.
    _subscribe(rs => {
      this.totalProducts = rs;
    }
    );
    this.authenticationService.changeEmitted$._subscribe(rs => this.isUserLogin = rs);
    this.isUserLogin = this.userLogin.id ? true : false;
  }

  search () {
    this.router.navigate(['/product-list', 0, this.name, 0, 0]);
  }

  openCart(){
    this.router.navigate(['/cart']);
  }

  getUserLogin(){
    this.userLogin = this.authenticationService.getUserInfo();
  }

  logout(){
    this.authenticationService.logout();
  }
}
