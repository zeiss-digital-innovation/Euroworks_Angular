export class SearchPage {
  navigateTo() {
    return browser.get('/about');
  }

  isDisplayed() {
    return element(by.css('ew-search')).isDisplayed();
  }
}
