import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {DetailProductComponent} from './components/detail-product/detail-product.component';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-list/:groupId/:name/:color/:category', component: ProductsComponent },
  { path: 'product/:id', component: DetailProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

