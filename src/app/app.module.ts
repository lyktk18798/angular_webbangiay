import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ProductsComponent} from './components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {TabComponent} from './components/tabs/tab.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {HomeComponent} from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import {MyCurrencyFormatterDirective} from './helpers/my-currency-formatter.directive';
import {MyCurrencyPipe} from './helpers/my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DetailProductComponent,
    ProductsComponent,
    TabComponent,
    TabsComponent,
    HomeComponent,
    FilterComponent,
    CartComponent,
    MyCurrencyFormatterDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [MyCurrencyFormatterDirective, MyCurrencyPipe],
  bootstrap: [AppComponent],
  exports: [ MyCurrencyFormatterDirective,  ],
})
export class AppModule { }
