import { CartItem } from './CartItem';
export class Cart{
  items: CartItem[] = [];
  //new cart not defined use{}
  totalPrice: number = 0;
  totalCount: number = 0;
}
