import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiServive: ProductService) {}
  lstProductsSpecials = [
    {
      id: 1,
      price: 5000,
      name: 'Men\'sFootwear',
      category: {
        id: 1,
      },
      image: '408b9012d99721c97886.jpg'
    }
  ];
  ngOnInit() {
  }

  getProducts () {
  }

}
