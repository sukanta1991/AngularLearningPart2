import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//  Declare all the components in this module
@NgModule({
  declarations: [
    AccountComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
