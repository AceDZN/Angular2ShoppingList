export class AngularBoilerplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-boilerplate-app h1')).getText();
  }
}
