import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  total: number = 0;
  items: Item[];
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(data => {
      this.items = data
      this.calculateTotal();
    });
  }
  goBack() {
    this.router.navigate(['home']);
  }

  calculateTotal() {
    this.items.forEach(item => {
      this.total = this.total+item.price;
    });
  }
}
