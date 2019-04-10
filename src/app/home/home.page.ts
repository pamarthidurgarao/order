import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: Item[];

  constructor(private router: Router, private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  gotoDetails(item: Item) {
    this.router.navigate(['item-details', item.productId]);
  }

}
