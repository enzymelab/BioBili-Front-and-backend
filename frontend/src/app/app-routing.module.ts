import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { AntibodyPageComponent } from './components/pages/antibody-page/antibody-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'antibody/:id', component: AntibodyPageComponent },
  { path: 'cart-page', component:CartPageComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'register', component:RegisterPageComponent},
  { path: 'checkout', component:CheckoutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
