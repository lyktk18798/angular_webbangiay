import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../service/product.service';
import {Product} from '../../models/product';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class CarouselComponent implements OnInit {
  @Input() lstSellingProduct: Product[];
  constructor() { }

  ngOnInit() {
  }
}
