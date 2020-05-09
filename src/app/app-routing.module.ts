import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {DetailProductComponent} from './components/detail-product/detail-product.component';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {ContactComponent} from './components/contact/contact.component';
import {InfoOrderComponent} from './components/info-order/info-order.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DefaultLayoutComponent} from './components/default-layout/default-layout.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'forgot-pass', component: ForgotPasswordComponent, pathMatch: 'full'},
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'info_order', component: InfoOrderComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'product-list/:groupId/:name/:color/:category', component: ProductsComponent},
      {path: 'product/:id', component: DetailProductComponent},
      {path: 'cart', component: CartComponent},
      {path: '**', pathMatch: 'full', redirectTo: '/home'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

