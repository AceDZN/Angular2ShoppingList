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
import { AcedznLogoComponent } from './acedzn-logo.component';

describe('Component: AcedznLogo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AcedznLogoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AcedznLogoComponent],
      (component: AcedznLogoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AcedznLogoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AcedznLogoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <acedzn-logo></acedzn-logo>
  `,
  directives: [AcedznLogoComponent]
})
class AcedznLogoComponentTestController {
}
