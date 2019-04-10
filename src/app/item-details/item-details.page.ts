import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  id: number;
  item: Item = new Item();
  slideOpts = {
    effect: 'flip'
  };

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService, private itemService: ItemService) {

  }


  ngOnInit() {
    this.readParam();
  }

  readParam() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.id = Number.parseInt(params['id']);
        this.itemService.getItems().subscribe(data => {
          debugger
          data.forEach(ele => {
            if (ele.productId == this.id)
              this.item = ele;
          })
        })
      }
    });
  }

  goBack() {
    this.router.navigate(['home']);
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }
}
