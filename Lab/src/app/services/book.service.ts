import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  jsonItems = {};
  setItem(key, item) {
    this.jsonItems[key] = item;
  }

  getItem(key) {
    return this.jsonItems[key];
  }
  constructor() { }
}
