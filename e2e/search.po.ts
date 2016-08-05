export class SearchPage {
  navigateTo() {
    return browser.get('/search');
  }

  isDisplayed() {
    return element(by.css('ew-search')).isDisplayed();
  }

  getSearchResultCount() {
    return element.all(by.css('ew-result-overview > .grid > *')).count();
  }
}
