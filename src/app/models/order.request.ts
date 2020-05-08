import {Product} from './product';

export class OrderRequest {
  address: string;
  customerId: number;
  lstProducts: Product[];
}
