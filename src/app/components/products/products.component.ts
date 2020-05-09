import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private apiService: ProductService,
              private route: ActivatedRoute) {
  }

  name: string;
  groupId: string;
  color: string;
  category: string;
  lstProducts: Product[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.groupId = params.get('groupId');
      this.color = params.get('color');
      this.category = params.get('category');
      this.search();

    });
  }

  search() {
    this.apiService.search(this.name, this.groupId, this.color, this.category)
    .subscribe(rs => {
      this.lstProducts = rs;
    });
  }
}
