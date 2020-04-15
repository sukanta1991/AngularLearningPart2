import { CartProduct } from './../../modals/cartProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/modals/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
// Class to display the products
export class ProductsComponent implements OnInit {
  items: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.routeAnalyser();
  }

  // Function to read the route and display data based on the route using activated route
  // Searching logic has to be implemented here
  routeAnalyser() {
    this.route.params.subscribe((params) => {
      if (
        params.category === 'vegetable' ||
        params.category === 'fruit' ||
        (params.category === 'grocery' && params.category !== null)
      ) {
        this.productService
          .getProductsByCategory(params.category)
          .subscribe((data) => (this.items = data));
      } else {
        if (
          params.name !== undefined ||
          this.router.url.includes('product/search')
        ) {
          this.productService.getAllProducts().subscribe((data) => {
            this.items = data.filter(
              (item) =>
                item.name.includes(params.name) ||
                item.name.toLowerCase().includes(params.name)
            );
            console.log(this.items);
          });
        } else if (this.router.url === '/products/all') {
          console.log('Product');
          this.productService
            .getAllProducts()
            .subscribe((data) => (this.items = data));
        }
      }
    });
  }

  // Function to change quantity when change in the Ui
  changeQuantity(event, i) {
    this.items[i].quantity = event.target.value;
  }

  // Function to add the product to cart using a sessionStorage item 'cart'
  // Convert the given value from Product to cartProduct type
  add(item: Product) {
    let cart: CartProduct[] = [];
    const product: CartProduct = {};
    let present = false;
    this.toastr.success(item.name + ' is added to cart');
    if (sessionStorage.getItem('cart') !== null) {
      cart = JSON.parse(sessionStorage.getItem('cart'));
      cart.forEach((data) => {
        if (item.id === data.productId) {
          data.quantity += item.quantity;
          present = true;
        }
      });
    } else {
      present = false;
    }
    if (!present) {
      product.productId = item.id;
      product.productName = item.name;
      if (item.quantity === undefined) {
        item.quantity = 1;
      }
      product.quantity = item.quantity;
      product.price = item.price;
      cart.push(product);
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}
