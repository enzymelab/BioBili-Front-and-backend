import { Antibody } from './antibody';
export class CartItem{
  constructor(public antibody: Antibody) { }
  quantity: number = 1;
  price: number = this.antibody.price;
}
