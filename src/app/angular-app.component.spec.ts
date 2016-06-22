import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularAppComponent } from '../app/angular-app.component';

beforeEachProviders(() => [AngularAppComponent]);

describe('App: AngularBoilerplate', () => {
  it('should create the app',
      inject([AngularAppComponent], (app: AngularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-boilerplate works!\'',
      inject([AngularAppComponent], (app: AngularAppComponent) => {
    expect(app.title).toEqual('angular-boilerplate works!');
  }));
});
