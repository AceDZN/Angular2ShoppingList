import { Component, EventEmitter } from '@angular/core';
import {ListItem} from '../list-item';


@Component({
  moduleId: module.id,
  selector: 'shopping-list-new-item',
  templateUrl: 'shopping-list-new-item.component.html',
  styleUrls: ['shopping-list-new-item.component.css'],
  outputs: [
    'itemAdded'
  ]
})
export class ShoppingListNewItemComponent {

  constructor() {}
  item = {value: "", amount:1, done: false};

  itemAdded = new EventEmitter<ListItem>();

  addItemOnClick(){
    if(this.item.value && this.item.value!=""){
      let now = new Date().getTime();
      let newItem = {value: this.item.value, amount: this.item.amount, done: this.item.done, canBeDeleted:true,createdOn:now};
      this.itemAdded.emit(newItem);
      this.item = {value: "", amount:1, done: false};
    } else {
      console.log("NO ITEM NAME")
    }

  }

}
