import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../models/product';
import {Color} from '../../models/color';
import {HelperService} from '../../service/helper.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() name;

  constructor(private apiService: ProductService,
              private helperService: HelperService) {
  }

  lstProductWoman: Product[] = [];
  lstProductMan: Product[] = [];
  lstProductKids: Product[] = [];
  lstColors: Color[] = [];
  lstBrands: Category[] = [];

  ngOnInit() {
    this.getProductWoman();
    this.getProductMan();
    this.getProductKids();
    this.getColors();
    this.getBrands();
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

  getColors() {
    this.helperService.getAllColors()
    .subscribe(rs => this.lstColors = rs);
  }

  getBrands() {
    this.helperService.getAllCategory()
    .subscribe(rs => this.lstBrands = rs);
  }ß
}
