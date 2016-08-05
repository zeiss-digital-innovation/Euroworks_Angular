export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickRootLink() {
    return element(by.css('#rootLink')).click();
  }

  clickSearchLink() {
    return element(by.css('#searchLink')).click();
  }

  clickAboutLink() {
    return element(by.css('#aboutLink')).click();
  }

  clickContactLink() {
    return element(by.css('#contactLink')).click();
  }

}
