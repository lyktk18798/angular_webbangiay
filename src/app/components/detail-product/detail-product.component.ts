import { Component, OnInit } from '@angular/core';
import {lstSizes} from '../constants/Constants';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  constructor() { }
  lstSizes = lstSizes;
  product = {
      id: 1,
      price: 5000,
      discount: 0.2,
      name: 'Line Link 67009',
      category: {
        id: 1,
        name: 'Bitis hunter',
      },
      image: '408b9012d99721c97886.jpg',
      description: 'With its beautiful premium leather, lace-up oxford styling, recycled rubber outsoles and 9-inch height, this Earthkeepers City Premium style is an undeniably handsome boot. To complement its rustic, commanding outer appearance, we\'ve paid attention to the inside as well - by adding SmartWool® faux shearling to the linings and crafting the footbed using our exclusive anti-fatigue comfort foam technology to absorb shock. Imported.',
      review: 'Premium burnished full-grain leather and suede upper',
      code: 'SP001',
      color: {
        id: 1,
        name: '#fff'
      },
      size: 37,
      producer: {
        id: 1,
        name: 'LiLy',
        address: 'Phuc Tho, Ha Noi'
      },
      quantity: 25,
    };

  ngOnInit() {
  }

}
