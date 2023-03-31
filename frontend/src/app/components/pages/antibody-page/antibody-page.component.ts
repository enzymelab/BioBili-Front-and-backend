import { CartService } from './../../../services/cart.service';
import { AntibodyService } from './../../../services/antibody.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Antibody } from '../../../shared/models/antibody';
import { Component } from '@angular/core';

@Component({
  selector: 'app-antibody-page',
  templateUrl: './antibody-page.component.html',
  styleUrls: ['./antibody-page.component.css']
})
export class AntibodyPageComponent {
  antibody!: Antibody;
  constructor(activatedRoute: ActivatedRoute, antibodyService: AntibodyService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        antibodyService.getAntibodyById(params.id).subscribe(serverAntibody => {
          this.antibody = serverAntibody;
        });
    })
  }


  addToCart() {
    this.cartService.addToCart(this.antibody);
    this.router.navigateByUrl('/cart-page');
  }


}
