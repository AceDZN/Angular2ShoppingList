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
import { ShoppingListNewItemComponent } from './shopping-list-new-item.component';

describe('Component: ShoppingListNewItem', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ShoppingListNewItemComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ShoppingListNewItemComponent],
      (component: ShoppingListNewItemComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ShoppingListNewItemComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ShoppingListNewItemComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <shopping-list-new-item></shopping-list-new-item>
  `,
  directives: [ShoppingListNewItemComponent]
})
class ShoppingListNewItemComponentTestController {
}
