import { Component,EventEmitter } from '@angular/core';
import {ListItem} from '../list-item';

@Component({
  moduleId: module.id,
  selector: 'shopping-list-item',
  templateUrl: 'shopping-list-item.component.html',
  styleUrls: ['shopping-list-item.component.css'],
  inputs:['item'],
  outputs:['removedItem']
})
export class ShoppingListItemComponent{
  item = {value: "32423423", amount:22, done: false,canBeDeleted:true,createdOn:0};

  constructor() {}
  removedItem = new EventEmitter<ListItem>();
  onItemDelete(){
    this.removedItem.emit(this.item);
  }
}
