import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [];
  latestItems: Item[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/json/items.json').subscribe((data: Item[]) => {
      this.items = data;
      this.latestItems = data;
    });
  }

  addToCart(item: Item) {
    this.latestItems.push(item);
  }

  getItems(): Observable<Item[]> {
    if (!this.latestItems) {
      return this.httpClient.get<Item[]>('assets/json/items.json');
    }
    return of(this.latestItems);
  }

}
