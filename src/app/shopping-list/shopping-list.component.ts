import { Component, OnInit } from '@angular/core';
import {ShoppingListNewItemComponent} from '../shopping-list-new-item/shopping-list-new-item.component';
import {ShoppingListItemComponent} from '../shopping-list-item/shopping-list-item.component';
import {ListItem} from '../list-item';

@Component({
  moduleId: module.id,
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
  directives: [
    ShoppingListNewItemComponent,
    ShoppingListItemComponent
  ],
  inputs: [

  ]

})
export class ShoppingListComponent implements OnInit {
  listItems = new Array<ListItem>()
  selectedItem: ListItem;
  constructor() {}

  ngOnInit() {
    this.listItems[0] = {value: "Buy Beer",amount:3,done: false, canBeDeleted:true,createdOn:1464602736598};
  }
  onItemAdded(item:ListItem) {
    this.listItems.push({
      value: item.value,
      amount: item.amount,
      done: item.done,
      canBeDeleted: item.canBeDeleted,
      createdOn: item.createdOn
    });
  }

  onItemEdit(item:ListItem){
    this.selectedItem = item;
  }
  itemRemove(item:ListItem){
    console.log('item:ListItem');
    this.listItems.splice(this.listItems.indexOf(item),1);
    this.selectedItem = null;
  }

}
