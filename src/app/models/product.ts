import {Category} from './category';
import {Producer} from './producer';

export class Product {
  id: number;
  name: string;
  code: string;
  price: number;
  size: number;
  quantity: number;
  dateImport: string;
  description: string;
  color: string;
  image: string;
  discount: number;
  category: Category;
  producer: Producer;
}
