import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShoppingListItemComponent } from './shopping-list-item.component';

describe('Component: ShoppingListItem', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ShoppingListItemComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ShoppingListItemComponent],
      (component: ShoppingListItemComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ShoppingListItemComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ShoppingListItemComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <shopping-list-item></shopping-list-item>
  `,
  directives: [ShoppingListItemComponent]
})
class ShoppingListItemComponentTestController {
}
