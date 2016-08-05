export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  isDisplayed() {
    return element(by.css('ew-about')).isDisplayed();
  }
}
