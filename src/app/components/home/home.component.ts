import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lstProductWoman: Product[] = [];
  lstProductMan: Product[] = [];
  lstProductKids: Product[] = [];
  lstSellingProduct: Product[] = [];

  constructor(private apiService: ProductService) {
  }

  ngOnInit() {
    this.getProductWoman();
    this.getProductMan();
    this.getProductKids();
    this.getSellingProducts();
  }

  getProductWoman() {
    this.apiService.getProductByGroup(1)
    .subscribe(rs => this.lstProductWoman = rs);
  }

  getProductMan() {
    this.apiService.getProductByGroup(2)
    .subscribe(rs => this.lstProductMan = rs);
  }

  getProductKids() {
    this.apiService.getProductByGroup(3)
    .subscribe(rs => this.lstProductKids = rs);
  }

  getSellingProducts() {
    this.apiService.getSellingProduct()
    .subscribe(rs => this.lstSellingProduct = rs);
  }

}
