import { UserService } from './../../../services/user.service';
import { CartService } from './../../../services/cart.service';
import { Component} from '@angular/core';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;
  constructor(cartService: CartService, private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })

  }

   logout() {
      this.userService.logout();
   }

  get isAuth() {
    return this.user.token;
  }
}
