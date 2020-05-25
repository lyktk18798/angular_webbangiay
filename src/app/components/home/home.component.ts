import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../models/product';
import {GroupProduct} from '../../models/group_product';
import {HelperService} from '../../service/helper.service';

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
  lstGroups: GroupProduct[] = [];

  constructor(private apiService: ProductService,
              private helperService: HelperService,) {
  }

  ngOnInit() {
    this.getGroups();
    this.getProductWoman();
    this.getProductMan();
    this.getProductKids();
    this.getSellingProducts();
    console.log(this.lstGroups);
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

  getGroups() {
    this.helperService.getAllGroups()
    .subscribe(rs => this.lstGroups = rs.map(item => ({
      ...item,
      totalProduct: item.name === 'WOMAN' ? this.lstProductWoman.length : item.name === 'MAN' ? this.lstProductMan.length : this.lstProductKids.length,
    })
    ));
  }

}
